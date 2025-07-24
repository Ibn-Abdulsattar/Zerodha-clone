const Holding = require('../models/holding');


module.exports.allHolding = async (req, res) => {
    const allHoldings = await Holding.find({user: req.user._id}).lean();

    res.send(allHoldings);
};