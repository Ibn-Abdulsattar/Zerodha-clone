// controllers/positionController.js
import Position from '../models/position.js';

export async function allPositions(req, res, next) {
    const allPositions = await Position.find({ user: req.user._id }).lean();
    res.status(201).json({allPositions});
}
