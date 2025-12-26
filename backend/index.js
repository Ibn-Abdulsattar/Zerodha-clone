// server.js (Node.js 22.x ESM)
import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import cron from 'node-cron';
import yahooFinance from 'yahoo-finance2';
import wrapAsync from './utility/wrapAsync.js';

import Holding from './models/holding.js';
import Position from './models/position.js';
import Fund from './models/fund.js';
import User from './models/user.js';

import fundRouter from './routes/fundRoutes.js';
import holdingRouter from './routes/holdingRoutes.js';
import positionRouter from './routes/positionRoutes.js';
import userAppRouter from './routes/userAppRoutes.js';
import withdrawRouter from './routes/withdrawRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import userRouter from './routes/userRoutes.js';

import { protect } from './middleware.js';

const app = express();
const port = process.env.PORT || 5000;
const dbsurl = process.env.MONGO_URL;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// CORS preflight + headers middleware (safe)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MongoDB Connection
main()
  .then(() => console.log(`✅ MongoDB connection successful`))
  .catch(err => console.error(`❌ MongoDB connection error:`, err));

async function main() {
  await mongoose.connect(dbsurl);
}

// CRON Job (runs every day at 4:30 PM server time)
cron.schedule('30 16 * * *', async () => {
  try {
    const users = await User.find({});

    for (const user of users) {
      const userPositions = await Position.find({ user: user._id, mode: 'Buy' });

      for (const position of userPositions) {
        const newHolding = new Holding({ ...position.toObject(), user: user._id });
        await newHolding.save();
        await Position.deleteOne({ _id: position._id });
      }

      const start = new Date();
      start.setUTCHours(0, 0, 0, 0);
      const end = new Date();
      end.setUTCHours(23, 59, 59, 999);

      const latestFund = await Fund.findOne({
        user: user._id,
        createdAt: { $gte: start, $lte: end }
      }).sort({ createdAt: -1 });

      if (latestFund) {
        await Fund.findByIdAndUpdate(latestFund._id, {
          $set: {
            payin: 0
          }
        });
      }
    }

    console.log(`✅ Cron job completed at ${new Date().toISOString()}`);
  } catch (err) {
    console.error(`❌ Cron job failed:`, err);
  }
});

// Health Check
app.get('/', (req, res) => {
  res.send('✅ Server is running!');
});

// Routes
app.use('/holding', protect, holdingRouter);
app.use('/fund', protect, fundRouter);
app.use('/order', protect, orderRouter);
app.use('/position', protect, positionRouter);
app.use('/userApp', userAppRouter);
app.use('/withdraw', protect, withdrawRouter);
app.use('/user', userRouter);

// Current User Info
app.get('/me', protect, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send(user);
});

// Live Market Price API
app.get('/api/price/:symbol', protect, wrapAsync(async (req, res) => {
  const { symbol } = req.params;
  const result = await yahooFinance.quote(symbol);

  if (!result || !result.regularMarketPrice) {
    return res.status(404).json({
      error: 'NotFoundError',
      message: `No price data found for symbol: ${symbol}`
    });
  }

  const { regularMarketPrice, currency } = result;
  res.json({ price: regularMarketPrice, currency });
}));

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.name || "InternalServerError",
    message: err.message || "Something went wrong!",
  });
});


// Start Server
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
