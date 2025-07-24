const UserApp = require('../models/userApp');

module.exports.allUserApp = async (req, res) => {
    const apps = await UserApp.find({});
    res.json(apps);
};

module.exports.connectedApp = async (req, res) => {
    await UserApp.findByIdAndUpdate(req.body.appId, { connected: true });
    res.sendStatus(200);
};

module.exports.disconnectApp = async (req, res) => {
    await UserApp.findByIdAndUpdate(req.body.appId, { connected: false });
    res.sendStatus(200);
};