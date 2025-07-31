// controllers/withdrawController.js
import ExpressError from '../utility/expressError.js';
import Withdraw from '../models/withdraw.js';
import Fund from '../models/fund.js';

export async function withdraw(req, res, next) {
  try {
    const userId = req.user._id;

    // Create new withdrawal with user attached
    const newWithdraw = new Withdraw({
      ...req.body,
      user: userId,
    });

    // Get latest fund entry for this user
    const latestFund = await Fund.findOne({ user: userId }).sort({ createdAt: -1 });

    if (!latestFund) {
      throw new ExpressError('No fund found for today', 400);
    }

    if (
      newWithdraw.withdraw_amount < 1 ||
      newWithdraw.withdraw_amount > latestFund.availableCash
    ) {
      throw new ExpressError('You don’t have enough cash...', 400);
    }

    await newWithdraw.save();

    // Update the user’s fund record
    const updatedFund = {
      availableMargin: latestFund.availableMargin - newWithdraw.withdraw_amount,
      availableCash: latestFund.availableCash - newWithdraw.withdraw_amount,
    };

    await Fund.findByIdAndUpdate(latestFund._id, { $set: updatedFund });

    res.status(200).json({ message: 'Amount has been withdrawn' });
  } catch (err) {
    next(err);
  }
}
