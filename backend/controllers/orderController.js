// controllers/orderController.js
import ExpressError from '../utility/expressError.js';
import Holding from '../models/holding.js';
import Order from '../models/order.js';
import Position from '../models/position.js';
import Fund from '../models/fund.js';
import wrapAsync from '../utility/wrapAsync.js';

// Handle Buy Order Logic
const handleBuyOrder = wrapAsync(async (newOrder, highFund, userId) => {
  const price = newOrder.price * newOrder.qty;
  const avg = parseFloat((price - Math.random() * 5).toFixed(2));
  const net = `${(((price - avg) / avg) * 100).toFixed(2)}%`;
  const day = `${(Math.random() * 6 - 3).toFixed(2)}%`;

  const newPosition = new Position({
    product: 'CNC',
    name: newOrder.name,
    qty: newOrder.qty,
    avg: avg,
    mode: newOrder.mode,
    price: price,
    net: net,
    day: day,
    user: userId,
  });

  await newPosition.save();

  const availableMargin = highFund.availableMargin - price;
  const usedMargin = highFund.usedMargin + price;

  await Fund.findByIdAndUpdate(highFund._id, {
    $set: {
      availableMargin,
      usedMargin,
    },
  });
});

// Handle Sell Order Logic
const handleSellOrder = wrapAsync(async (preStock, preHold, newOrder, highFund) => {
  let buyPrice = 0;
  let profit = null;
  let loss = null;

  if (preStock) {
    if (preStock.qty > newOrder.qty) {
      await preStock.updateOne({ qty: preStock.qty - newOrder.qty });
    } else if (preStock.qty === newOrder.qty) {
      await preStock.deleteOne();
    }
    buyPrice = preStock.avg;
  } else if (preHold) {
    if (preHold.qty > newOrder.qty) {
      await preHold.updateOne({ qty: preHold.qty - newOrder.qty });
    } else if (preHold.qty === newOrder.qty) {
      await preHold.deleteOne();
    }
    buyPrice = preHold.avg;
  }

  if (newOrder.price > buyPrice) {
    profit = (newOrder.price - buyPrice) * newOrder.qty;
  } else {
    loss = (buyPrice - newOrder.price) * newOrder.qty;
  }

  const availableCash = profit ? highFund.availableCash + profit : highFund.availableCash;
  const usedMargin = highFund.usedMargin - (buyPrice * newOrder.qty);
  const availableMargin = profit
    ? highFund.availableMargin + profit
    : highFund.availableMargin - loss;

  await Fund.findByIdAndUpdate(highFund._id, {
    $set: {
      availableMargin,
      usedMargin,
      availableCash,
    },
  });
});

// Create New Order
export const createOrder = async (req, res) => {
  const newOrder = new Order({
    ...req.body,
    user: req.user._id,
  });

  const preStock = await Position.findOne({ name: newOrder.name, user: req.user._id });
  const preHold = await Holding.findOne({ name: newOrder.name, user: req.user._id });

  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const todayFund = await Fund.find({
    createdAt: { $gte: start, $lte: end },
    user: req.user._id,
  }).sort({ createdAt: -1 });

  const highFund = todayFund[0];

  const availabelQty = preStock?.qty || preHold?.qty || 0;
  const totalCost = newOrder.price * newOrder.qty;

  if (newOrder.qty < 1 || newOrder.price < 1 || !highFund || highFund.availableMargin < totalCost) {
    return res.status(400).json({message:'Invalid quantity or insufficient margin'});
  }

  if (newOrder.mode === 'Sell' && newOrder.qty > availabelQty) {
    return res.status(400).json({message:'Not enough stock to sell!'});
  }

  await newOrder.save();

  if (newOrder.mode === 'Buy') {
    await handleBuyOrder(newOrder, highFund, req.user._id);
  } else if (newOrder.mode === 'Sell') {
    await handleSellOrder(preStock, preHold, newOrder, highFund);
  }

  res.status(201).json({ message: 'Order and Position created' });
};

// Get All Orders
export const allOrder = async (req, res) => {
  if (!req.user || !req.user._id) {
    return res.status(401).json({ message: "Unauthorized: No user found" });
  }
  const allOrders = await Order.find({ user: req.user._id }).lean();
  console.log(allOrders)
  return res.status(200).json({allOrders});
};
