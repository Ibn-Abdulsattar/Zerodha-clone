// routes/positionRoutes.js
import express from 'express';
import { allPositions } from '../controllers/positionController.js';
import wrapAsync from '../utility/wrapAsync.js';

const router = express.Router();

router.get('/positions', wrapAsync(allPositions));

export default router;
