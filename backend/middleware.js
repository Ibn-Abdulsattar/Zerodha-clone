const { fundSchema, holdingSchema, orderSchema, } = require('./schema.js');
const { positionSchema, userAppSchema, withdrawSchema, userSchema} = require('./schema.js');
const { toggleUserAppSchema } = require('./schema');
const ExpressError = require('./utility/expressError.js');
const User = require('./models/user.js');
const jwt = require('jsonwebtoken');


module.exports.validateFund = (req, res, next) => {
    let { error } = fundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(', ');
        throw new ExpressError(400, msg);
    } else {
        next()
    }
};

module.exports.validateHolding = (req, res, next) => {
    let { error } = holdingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(', ');
        throw new ExpressError(400, msg);
    } else {
        next()
    }
};

module.exports.validateOrder = (req, res, next) => {
    let { error } = orderSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(', ');
        throw new ExpressError(400, msg);
    } else {
        next()
    }
};

module.exports.validatePosition = (req, res, next) => {
    let { error } = positionSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(', ');
        throw new ExpressError(400, msg);
    } else {
        next()
    }
};



module.exports.validateUserApp = (req, res, next) => {
    const { error } = userAppSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(', ');
        throw new ExpressError(400, msg);
    }
    next();
};

module.exports.validateToggleUserApp = (req, res, next) => {
    const { error } = toggleUserAppSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(', ');
        throw new ExpressError(400, msg);
    }
    next();
};



module.exports.validateWithdraw = (req, res, next) => {
    let { error } = withdrawSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(', ');
        throw new ExpressError(400, msg);
    } else {
        next()
    }
};

module.exports.validateUser = (req, res, next) => {
    let { error } = userSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(', ');
        throw new ExpressError(400, msg);
    } else {
        next()
    }
};


module.exports.protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new ExpressError(401, 'Unauthorized: Token missing');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      throw new ExpressError(401, 'User not found');
    }

    req.user = user;
    next();
  } catch (err) {
    throw new ExpressError(401, 'Invalid or expired token');
  }
};
