// routes/fundRoutes.js
import express from 'express';
import { createFund, latestFund } from '../controllers/fundController.js';
import wrapAsync from '../utility/wrapAsync.js';
import { validateFund } from '../middleware.js';

const router = express.Router();

router.post('/createFund', wrapAsync(createFund));

router.get('/allFund', validateFund, wrapAsync(latestFund));

export default router;
