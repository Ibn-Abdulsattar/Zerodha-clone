const Fund = require('../models/fund');

module.exports.createFund = async (req, res) => {
    const newFund = new Fund({
        amount: req.body.amount,
        payMethod: req.body.payMethod,
        user: req.user._id,
        availableMargin: 0,
        usedMargin: 0,
        availableCash: 0,
        payin: req.body.amount
    });

    await newFund.save();

    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const allFund = await Fund.find({
        user: req.user._id,
        createdAt: { $gte: start, $lte: end }
    });

    const totalPayin = allFund.reduce((sum, fund) => sum + fund.amount, 0);

    await Fund.findByIdAndUpdate(newFund._id, { payin: totalPayin });

    res.status(201).json({ message: "Fund data created successfully" });
};

module.exports.latestFund = async (req, res) => {
    const latestFund = await Fund.findOne({ user: req.user._id })
        .sort({ createdAt: -1 })
        .lean();

    res.send(latestFund);
};
