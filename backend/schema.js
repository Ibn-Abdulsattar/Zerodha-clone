const joi = require('joi');

module.exports.fundSchema = joi.object({
    amount: joi.number().min(5).required(),
    payMethod: joi.string().required(),
    availableMargin: joi.number().default(0),
    usedMargin: joi.number().default(0),
    availableCash: joi.number().default(0),
    payin: joi.number().default(0)
});

module.exports.holdingSchema = joi.object({
    name: joi.string().trim().required(),
    qty: joi.number().min(1).required(),
    avg: joi.number().required(),
    price: joi.number().min(1).required(),
    net: joi.string().trim().required(),
    day: joi.string().trim().required(),
});

module.exports.orderSchema = joi.object({
    name: joi.string().trim().required(),
    qty: joi.number().min(1).required(),
    price: joi.number().min(1).required(),
    mode: joi.string().valid('Buy', 'Sell').required()
});

module.exports.positionSchema = joi.object({
    product: joi.string().trim().required(),
    name: joi.string().trim().required(),
    qty: joi.number().min(1).required(),
    avg: joi.number().required(),
    mode: joi.string().trim().required(),
    price: joi.number().min(1).required(),
    net: joi.string().trim().required(),
    day: joi.string().trim().required(),
    isLoss: joi.boolean().default(false)
});

module.exports.userAppSchema = joi.object({
    userId: joi.string().required(),
    name: joi.string().trim().required(),
    description: joi.string().trim().required(),
    connected: joi.boolean().default(false)
});

module.exports.withdrawSchema = joi.object({
    withdraw_amount: joi.number().min(1).required()
});

module.exports.userSchema = joi.object({
    username: joi.string().trim(),
    email: joi.string().trim().required(),
    password: joi.string().trim().required(),
});

module.exports.toggleUserAppSchema = joi.object({
  appId: joi.string().required()
});
