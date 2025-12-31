// controllers/orderController.js
import Holding from "../models/holding.js";
import Order from "../models/order.js";
import Position from "../models/position.js";
import Fund from "../models/fund.js";
import wrapAsync from '../utility/wrapAsync.js'

// Handle Buy Order Logic
const handleBuyOrder = async (newOrder, recentFund, userId) => {
  const price = newOrder.price * newOrder.qty;
  const avg = parseFloat((price - Math.random() * 5).toFixed(2));
  const net = `${(((price - avg) / avg) * 100).toFixed(2)}%`;
  const day = `${(Math.random() * 6 - 3).toFixed(2)}%`;

  const newPosition = new Position({
    product: "CNC",
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

  const availableMargin = recentFund.availableMargin - price;
  const usedMargin = recentFund.usedMargin + price;
  const availableCash = availableMargin + usedMargin;

  await Fund.findByIdAndUpdate(recentFund._id, {
    $set: {
      availableMargin,
      usedMargin,
      availableCash,
    },
  });
};

// Handle Sell Order Logic
const handleSellOrder = async (preStock, preHold, newOrder, recentFund) => {
  // 1. Determine original buy price
  let buyPrice = preStock?.avg || preHold?.avg || 0;

  // 2. Handle Stock Reduction
  if (preStock) {
    if (preStock.qty > newOrder.qty) {
      await Position.findByIdAndUpdate(preStock._id, { $inc: { qty: -newOrder.qty } });
    } else {
      await Position.findByIdAndDelete(preStock._id);
    }
  } else if (preHold) {
    if (preHold.qty > newOrder.qty) {
      await Holding.findByIdAndUpdate(preHold._id, { $inc: { qty: -newOrder.qty } });
    } else {
      await Holding.findByIdAndDelete(preHold._id);
    }
  }

  // 3. Financial Calculations
  const sellValue = newOrder.price * newOrder.qty;
  const originalCost = buyPrice * newOrder.qty;

  // Access usedMargin directly from the passed object
  const usedMargin = recentFund.usedMargin - originalCost;
  const availableMargin = recentFund.availableMargin + sellValue;
  const availableCash = usedMargin + availableMargin;

  // 4. Update Database
  await Fund.findByIdAndUpdate(recentFund._id, {
    $set: {
      availableMargin,
      usedMargin,
      availableCash,
    },
  });
};


// Create New Order
export const createOrder = async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const userId = req.user._id;

  // Use a Case-Insensitive search to prevent "Not enough stock" errors due to capitalization
  const preStock = await Position.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') }, user: userId });
  const preHold = await Holding.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') }, user: userId });
  
  const recentFund = await Fund.findOne({ user: userId }).sort({ createdAt: -1 });

  if (!recentFund) return res.status(400).json({ message: "No fund account found" });

  const availabelQty = (preStock?.qty || 0) + (preHold?.qty || 0);
  const totalCost = price * qty;

  // LOGS TO FIND THE 400 ERROR
  console.log(`Mode: ${mode}, ReqQty: ${qty}, Available: ${availabelQty}`);

  if (mode === "Sell" && qty > availabelQty) {
    console.log("Validation Failed: Not enough stock");
    return res.status(400).json({ message: "Not enough stock to sell!" });
  }

  if (mode === "Buy" && recentFund.availableMargin < totalCost) {
    console.log("Validation Failed: Insufficient margin");
    return res.status(400).json({ message: "Insufficient margin" });
  }

  const newOrder = new Order({ ...req.body, user: userId });
  await newOrder.save();

  console.log("mode === 'Sell'", mode);

  if (mode === "Buy") {
    await handleBuyOrder(newOrder, recentFund, req.user._id);
  } else if (mode === "Sell") {
  console.log("Before _ recentFund =", recentFund, "recentFund['usedMargin'] =", recentFund['usedMargin'])
    await handleSellOrder(preStock, preHold, newOrder, recentFund);
  console.log(" After _ recentFund =", recentFund, "recentFund['usedMargin'] =", recentFund['usedMargin'])

  }

  res.status(201).json({ message: 'Order executed and funds updated' });
};

// Get All Orders
export const allOrder = async (req, res) => {
  if (!req.user || !req.user._id) {
    return res.status(401).json({ message: "Unauthorized: No user found" });
  }
  const allOrders = await Order.find({ user: req.user._id }).lean();
  return res.status(200).json({ allOrders });
};
