// middleware.js
import {
  fundSchema,
  holdingSchema,
  orderSchema,
  positionSchema,
  userAppSchema,
  withdrawSchema,
  userSchema,
  toggleUserAppSchema
} from './schema.js';

import ExpressError from './utility/expressError.js';
import User from './models/user.js';
import jwt from 'jsonwebtoken';

// 📌 Validation Middleware
const validateFund = (req, res, next) => {
  const { error } = fundSchema.validate(req.body);
  if (error) throw new ExpressError(error.details.map(el => el.message).join(', '), 400);
  next();
};

const validateHolding = (req, res, next) => {
  const { error } = holdingSchema.validate(req.body);
  if (error) throw new ExpressError(error.details.map(el => el.message).join(', '), 400);
  next();
};

const validateOrder = (req, res, next) => {
  const { error } = orderSchema.validate(req.body);
  if (error) throw new ExpressError(error.details.map(el => el.message).join(', '), 400);
  next();
};

const validatePosition = (req, res, next) => {
  const { error } = positionSchema.validate(req.body);
  if (error) throw new ExpressError(error.details.map(el => el.message).join(', '), 400);
  next();
};

const validateUserApp = (req, res, next) => {
  const { error } = userAppSchema.validate(req.body);
  if (error) throw new ExpressError(error.details.map(el => el.message).join(', '), 400);
  next();
};

const validateToggleUserApp = (req, res, next) => {
  const { error } = toggleUserAppSchema.validate(req.body);
  if (error) throw new ExpressError(error.details.map(el => el.message).join(', '), 400);
  next();
};

const validateWithdraw = (req, res, next) => {
  const { error } = withdrawSchema.validate(req.body);
  if (error) throw new ExpressError(error.details.map(el => el.message).join(', '), 400);
  next();
};

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) throw new ExpressError(error.details.map(el => el.message).join(', '), 400);
  next();
};

// 🔐 JWT Authentication Middleware
const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new ExpressError('Unauthorized: Token missing', 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      throw new ExpressError('User not found', 401);
    }

    req.user = user;
    next();
  } catch (err) {
    throw new ExpressError('Invalid or expired token', 401);
  }
};

// ✅ Export All Middleware Functions
export {
  validateFund,
  validateHolding,
  validateOrder,
  validatePosition,
  validateUserApp,
  validateToggleUserApp,
  validateWithdraw,
  validateUser,
  protect
};
