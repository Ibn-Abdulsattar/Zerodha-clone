// routes/userRoutes.js
import express from 'express';
import {
  signup,
  signin,
  logout,
  profile
} from '../controllers/authController.js';
import wrapAsync from '../utility/wrapAsync.js';
import { validateUser, protect } from '../middleware.js';

const router = express.Router();

router.post('/signup', validateUser, wrapAsync(signup));
router.post('/signin', wrapAsync(signin));
router.post('/logout', protect, wrapAsync(logout));
router.get('/me', protect, wrapAsync(profile));

export default router;
