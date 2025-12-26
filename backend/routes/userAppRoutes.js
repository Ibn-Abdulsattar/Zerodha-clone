// routes/userAppRoutes.js
import express from 'express';
import wrapAsync from '../utility/wrapAsync.js';
import {
  allUserApp,
  connectedApp,
  disconnectApp
} from '../controllers/userAppController.js';
import {
  validateUserApp,
  validateToggleUserApp
} from '../middleware.js';

const router = express.Router();

router.get('/user-apps', wrapAsync(allUserApp));

router.post('/user-apps/connect', validateToggleUserApp, wrapAsync(connectedApp));

router.post('/user-apps/disconnect', validateToggleUserApp, wrapAsync(disconnectApp));

export default router;
