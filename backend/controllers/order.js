const ExpressError = require('../utility/expressError');
const Holding = require('../models/holding');
const Order = require('../models/order');
const Position = require('../models/position');
const Fund = require('../models/fund');
const wrapAsync = require('../utility/wrapAsync');

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
        user: userId // ✅ Set user
    });

    await newPosition.save();

    const availableMargin = highFund.availableMargin - price;
    const usedMargin = highFund.usedMargin + price;

    await Fund.findByIdAndUpdate(highFund._id, {
        $set: {
            availableMargin,
            usedMargin
        }
    });
});


const handleSellOrder = wrapAsync(async (preStock, preHold, newOrder, highFund) => {
    let buyPrice = 0;
    let profit = null;
    let loss = null;
    if (preStock) {
        if (preStock.qty > newOrder.qty) {
            await preStock.updateOne({ qty: preStock.qty - newOrder.qty });
        } else if ((preStock.qty === newOrder.qty)) {
            await preStock.deleteOne();
        }
        buyPrice = preStock.avg;
    }
    else if (preHold) {
        if (preHold.qty > newOrder.qty) {
            await preHold.updateOne({ qty: preHold.qty - newOrder.qty })
        } else if ((preHold.qty === newOrder.qty)) {
            await preHold.deleteOne();
        }
        buyPrice = preHold.avg;
    }


    if (newOrder.price > buyPrice) {
        profit = (newOrder.price - buyPrice) * newOrder.qty;
    } else {
        loss = (buyPrice - newOrder.price) * newOrder.qty;
    }

    const availableCash = profit ? highFund.availableCash + profit : highFund.availableCash
    const usedMargin = highFund.usedMargin - (buyPrice * newOrder.qty);
    const availableMargin = profit ? highFund.availableMargin + profit : highFund.availableMargin - loss


    await Fund.findByIdAndUpdate(highFund._id, {
        $set: {
            availableMargin: availableMargin, usedMargin: usedMargin, availableCash: availableCash
        }
    });
});

module.exports.createOrder = async (req, res) => {
    const newOrder = new Order({
        ...req.body,
        user: req.user._id // ✅ Assign user to the new order
    });

    // ✅ Filter user-specific stock/holdings
    const preStock = await Position.findOne({
        name: newOrder.name,
        user: req.user._id
    });

    const preHold = await Holding.findOne({
        name: newOrder.name,
        user: req.user._id
    });

    // ✅ Get today's fund of this user
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const todayFund = await Fund.find({
        createdAt: { $gte: start, $lte: end },
        user: req.user._id
    }).sort({ createdAt: -1 });

    const highFund = todayFund[0];

    const availabelQty = preStock?.qty || preHold?.qty || 0;
    const totalCost = newOrder.price * newOrder.qty;

    if (newOrder.qty < 1 || newOrder.price < 1 || !highFund || highFund.availableMargin < totalCost) {
        throw new ExpressError(400, 'Invalid quantity or insufficient margin');
    }

    if (newOrder.mode === 'Sell' && newOrder.qty > availabelQty) {
        throw new ExpressError(400, 'Not enough stock to sell!');
    }

    await newOrder.save();

    if (newOrder.mode === 'Buy') {
        await handleBuyOrder(newOrder, highFund, req.user._id);
    } else if (newOrder.mode === 'Sell') {
        await handleSellOrder(preStock, preHold, newOrder, highFund);
    }

    res.status(201).json({ message: 'Order and Position created' });
};



module.exports.allOrder = async (req, res) => {
    const allOrders = await Order.find({ user: req.user._id }).lean();
    res.send(allOrders);
};
