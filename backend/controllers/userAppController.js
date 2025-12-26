// controllers/userAppController.js
import UserApp from '../models/userApp.js';

// Get all user apps
export async function allUserApp(req, res, next) {
  try {
    const apps = await UserApp.find({});
    res.status(201).json({apps});
  } catch (err) {
    next(err);
  }
}

// Mark app as connected
export async function connectedApp(req, res, next) {
  try {
    await UserApp.findByIdAndUpdate(req.body.appId, { connected: true });
    res.status(201).json({message: "App is connected"});
  } catch (err) {
    next(err);
  }
}

// Mark app as disconnected
export async function disconnectApp(req, res, next) {
  try {
    await UserApp.findByIdAndUpdate(req.body.appId, { connected: false });
    res.status(201).json({message: "App is Disconnected"});
  } catch (err) {
    next(err);
  }
}
