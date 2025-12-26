import Joi from 'joi';

export const fundSchema = Joi.object({
  amount: Joi.number().min(5).required(),
  payMethod: Joi.string().required(),
  availableMargin: Joi.number().default(0),
  usedMargin: Joi.number().default(0),
  availableCash: Joi.number().default(0),
  payin: Joi.number().default(0),
});

export const holdingSchema = Joi.object({
  name: Joi.string().trim().required(),
  qty: Joi.number().min(1).required(),
  avg: Joi.number().required(),
  price: Joi.number().min(1).required(),
  net: Joi.string().trim().required(),
  day: Joi.string().trim().required(),
});

export const orderSchema = Joi.object({
  name: Joi.string().trim().required(),
  qty: Joi.number().min(1).required(),
  price: Joi.number().min(1).required(),
  mode: Joi.string().valid('Buy', 'Sell').required(),
});

export const positionSchema = Joi.object({
  product: Joi.string().trim().required(),
  name: Joi.string().trim().required(),
  qty: Joi.number().min(1).required(),
  avg: Joi.number().required(),
  mode: Joi.string().trim().required(),
  price: Joi.number().min(1).required(),
  net: Joi.string().trim().required(),
  day: Joi.string().trim().required(),
  isLoss: Joi.boolean().default(false),
});

export const userAppSchema = Joi.object({
  userId: Joi.string().required(),
  name: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  connected: Joi.boolean().default(false),
});

export const withdrawSchema = Joi.object({
  withdraw_amount: Joi.number().min(1).required(),
});

export const userSchema = Joi.object({
  username: Joi.string().trim(),
  email: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
});

export const toggleUserAppSchema = Joi.object({
  appId: Joi.string().required(),
});
