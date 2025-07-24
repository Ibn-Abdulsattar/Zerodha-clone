const ExpressError = require('../utility/expressError');
const Withdraw = require('../models/withdraw');
const Fund = require('../models/fund');

module.exports.withdraw = async (req, res) => {
    const userId = req.user._id;

    // Create new withdrawal with user attached
    const newWithdraw = new Withdraw({
        ...req.body,
        user: userId,
    });

    // Get latest fund entry for this user
    const latestFund = await Fund.findOne({ user: userId })
        .sort({ createdAt: -1 });

    if (!latestFund) {
        throw new ExpressError(400, 'No fund found for today');
    }

    if (
        newWithdraw.withdraw_amount < 1 ||
        newWithdraw.withdraw_amount > latestFund.availableCash
    ) {
        throw new ExpressError(400, 'You don’t have enough cash...');
    }

    await newWithdraw.save();

    // Update the user’s fund record
    const updatedFund = {
        availableMargin: latestFund.availableMargin - newWithdraw.withdraw_amount,
        availableCash: latestFund.availableCash - newWithdraw.withdraw_amount,
    };

    await Fund.findByIdAndUpdate(latestFund._id, { $set: updatedFund });

    res.status(200).json({ message: "Amount has been withdrawn" });
};
