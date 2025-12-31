// controllers/fundController.js
import Fund from '../models/fund.js';

// Create a new fund and update payin total
export async function createFund(req, res) {
  try {
    const amount = Number(req.body.amount); 
  const { payMethod} = req.body;

  const latestFund = await Fund.findOne({ user: req.user._id })
      .sort({ createdAt: -1 });

    // Define start and end of current day
    const start = new Date();
    start.setUTCHours(0, 0, 0, 0);
    const end = new Date();
    end.setUTCHours(23, 59, 59, 999);

    // Find all fund records for the current user today
    const dailyTotal = await Fund.aggregate([
      {$match: {
        user: req.user._id,
        createdAt: { $gte: start, $lte: end },
      }},
      {$group:{ _id: null, total:{$sum: "$amount"}}}
    ]);
    
    const existingTotal =  dailyTotal.length > 0 ? dailyTotal[0].total : 0;
    const newTotal = existingTotal + amount ;

    const currentUsedMargin = latestFund?.usedMargin || 0
    const newAvailableMargin = latestFund ? latestFund.availableMargin + amount : amount;
    const newAvailableCash = newAvailableMargin + currentUsedMargin;
    
        const newFund = new Fund({
      amount: amount,
      payMethod: payMethod,
      user: req.user._id,
      availableMargin: newAvailableMargin,
      availableCash: newAvailableCash,
      usedMargin: currentUsedMargin,
      payin: newTotal,
    });


    await newFund.save();

    res.status(201).json({ message: `${amount}Rs Fund created successfully` });
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

    res.status(201).json({latestFund});
  } catch (err) {
    console.error('Error fetching latest fund:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
