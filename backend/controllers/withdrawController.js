// controllers/withdrawController.js
import Withdraw from '../models/withdraw.js';
import Fund from '../models/fund.js';

export async function withdraw(req, res, next) {
  try {
    const userId = req.user._id;
    const {withdraw_amount} =req.body;

    // Create new withdrawal with user attached
    const newWithdraw = new Withdraw({
      withdraw_amount,
      user: userId,
    });

    // Get latest fund entry for this user
    const latestFund = await Fund.findOne({ user: userId }).sort({ createdAt: -1 });

    if (!latestFund) {
      return res.status(400).json({message:'No fund found for today'});
    }

    if (
      withdraw_amount < 1 ||
      withdraw_amount > latestFund.availableMargin
    ) {
      return res.status(400).json({message:'You don’t have enough cash...',});
    }

    await newWithdraw.save();

    // Update the user’s fund record
    const updatedFund = {
      availableMargin: latestFund.availableMargin - withdraw_amount,
      availableCash: latestFund.availableCash - withdraw_amount,
      payin: Math.max(0, latestFund.payin - withdraw_amount)
    };

    await Fund.findByIdAndUpdate(latestFund._id, { $set: updatedFund });

    res.status(200).json({ message: `${withdraw_amount}Rs, Amount has been withdrawn` });
  } catch (err) {
    next(err);
  }
}
