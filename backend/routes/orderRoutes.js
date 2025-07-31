// routes/orderRoutes.js
import express from 'express';
import wrapAsync from '../utility/wrapAsync.js';
import { validateOrder } from '../middleware.js';
import { createOrder, allOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/createOrder', validateOrder, wrapAsync(createOrder));

router.get('/allorders', wrapAsync(allOrder));

export default router;
