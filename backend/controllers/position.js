const Position = require('../models/position');


module.exports.allPositions = async (req, res) => {
    const allPositions = await Position.find({ user: req.user._id}).lean();

    res.send(allPositions);
};