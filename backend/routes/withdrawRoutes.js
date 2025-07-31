// routes/withdrawRoutes.js
import express from 'express';
import wrapAsync from '../utility/wrapAsync.js';
import { withdraw } from '../controllers/withdrawController.js';
import { validateWithdraw } from '../middleware.js';

const router = express.Router();

router.post('/withdraw', validateWithdraw, wrapAsync(withdraw));

export default router;
