// routes/holdingRoutes.js
import express from 'express';
import { allHolding } from '../controllers/holdingController.js';
import wrapAsync from '../utility/wrapAsync.js';

const router = express.Router();

router.get('/holdings', wrapAsync(allHolding));

export default router;
