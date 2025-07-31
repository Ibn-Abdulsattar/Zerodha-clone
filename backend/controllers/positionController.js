// controllers/positionController.js
import Position from '../models/position.js';

export async function allPositions(req, res, next) {
  try {
    const allPositions = await Position.find({ user: req.user._id }).lean();
    res.send(allPositions);
  } catch (err) {
    next(err); // Let centralized error handler catch it
  }
}
