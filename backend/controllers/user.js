const User = require('../models/user');
const ExpressError = require('../utility/expressError');
const generateToken = require('../utility/generateToken');

module.exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ExpressError(400, 'User already exists!')
    }

    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);

    res.cookie('token', token, {
        httpOnly: true, secure: process.env.NODE_ENV === 'production'
        , sameSite: 'Strict',
        maxAge: 2 * 24 * 60 * 60 * 1000, //2day
    })

    res.status(201).json({
        message: 'User registered successfully!',
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
};

module.exports.signin = async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        throw new ExpressError(400, 'You are not registered successfully!')
    }

    const isMatch = await existingUser.comparePassword(password);
    if (!isMatch) {
        throw new ExpressError(400, 'Please enter correct password!')
    }
    const token = generateToken(existingUser._id)

    res.cookie('token', token, {
        httpOnly: true, secure: process.env.NODE_ENV === 'production'
        , sameSite: 'Strict',
        maxAge: 2 * 24 * 60 * 60 * 1000, //2day
    })

    res.status(200).json({
        message: 'Welcome back!',
        token,
        user: {
            id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email
        }
    });

};

module.exports.logout = async (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
    });

    res.send('Logged out successfully!');
};