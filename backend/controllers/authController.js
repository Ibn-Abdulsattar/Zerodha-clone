// controllers/authController.js
import User from '../models/user.js';
import ExpressError from '../utility/expressError.js';
import generateToken from '../utility/generateToken.js';

// SIGNUP
export async function signup(req, res, next) {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ExpressError('User already exists!', 400);
    }

    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    });

    res.status(201).json({
      message: 'User registered successfully!',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
}

// SIGNIN
export async function signin(req, res, next) {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new ExpressError('You are not registered successfully!', 400);
    }

    const isMatch = await existingUser.comparePassword(password);
    if (!isMatch) {
      throw new ExpressError('Please enter correct password!', 400);
    }

    const token = generateToken(existingUser._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: 'Welcome back!',
      token,
      user: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
    });
  } catch (err) {
    next(err);
  }
}

// LOGOUT
export async function logout(req, res) {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
  });

  res.send('Logged out successfully!');
}
