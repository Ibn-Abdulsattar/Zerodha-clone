// controllers/fundController.js
import Fund from '../models/fund.js';

// Create a new fund and update payin total
export async function createFund(req, res) {
  try {
    const newFund = new Fund({
      amount: req.body.amount,
      payMethod: req.body.payMethod,
      user: req.user._id,
      availableMargin: 0,
      usedMargin: 0,
      availableCash: 0,
      payin: req.body.amount,
    });

    await newFund.save();

    // Define start and end of current day
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    // Find all fund records for the current user today
    const allFund = await Fund.find({
      user: req.user._id,
      createdAt: { $gte: start, $lte: end },
    });

    // Calculate total payin for today
    const totalPayin = allFund.reduce((sum, fund) => sum + fund.amount, 0);

    // Update the current fund record with total payin
    await Fund.findByIdAndUpdate(newFund._id, { payin: totalPayin });

    res.status(201).json({ message: "Fund data created successfully" });
  } catch (err) {
    console.error('Error creating fund:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Fetch the latest fund entry for a user
export async function latestFund(req, res) {
  try {
    const latestFund = await Fund.findOne({ user: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    res.send(latestFund);
  } catch (err) {
    console.error('Error fetching latest fund:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
