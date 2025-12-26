// controllers/holdingController.js
import Holding from '../models/holding.js';

export async function allHolding(req, res, next) {
  try {
    const allHoldings = await Holding.find({ user: req.user._id }).lean();
    res.status(201).json({allHoldings});
  } catch (err) {
    next(err); // Let centralized error middleware or ExpressError handle it
  }
};
