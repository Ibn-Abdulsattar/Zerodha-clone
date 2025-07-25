if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const dbsurl = process.env.MONGO_URL;
const Holding = require('./models/holding');
const Position = require('./models/position');
const Fund = require('./models/fund');
const User = require('./models/user');

const fundRouter = require('./routes/fund');
const holdingRouter = require('./routes/holding');
const positionRouter = require('./routes/position');
const userAppRouter = require('./routes/userApp');
const withdrawRouter = require('./routes/withdraw');
const orderRouter = require('./routes/order');
const userRouter = require('./routes/user');
const { protect } = require('./middleware');
const cookieParser = require('cookie-parser');

const cors = require('cors')
const yahooFinance = require('yahoo-finance2').default;
const cron = require('node-cron');
const wrapAsync = require('./utility/wrapAsync');

const allowedOrigins = ["https://main.d1j2bhmi0fpcet.amplifyapp.com/#",
  "https://main.d2np3magzuj7ka.amplifyapp.com/",
  "https://main.d35r5otxvmb7vz.amplifyapp.com/"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

main()
  .then(res => console.log(`Connection successful`)
  )
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbsurl);
};

cron.schedule('30 16 * * *', async () => {
  try {
    const users = await User.find({}); // Get all users

    for (const user of users) {
      // Move positions to holdings for this user
      const userPositions = await Position.find({ user: user._id, mode: 'Buy' });

      for (const position of userPositions) {
        const newHolding = new Holding({ ...position.toObject(), user: user._id });
        await newHolding.save();
        await Position.deleteOne({ _id: position._id });
      }

      // Update the user's fund
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 999);

      const latestFund = await Fund.findOne({
        user: user._id,
        createdAt: { $gte: start, $lte: end }
      }).sort({ createdAt: -1 });

      if (latestFund) {
        await Fund.findByIdAndUpdate(latestFund._id, {
          $set: {
            availableMargin: latestFund.availableMargin + latestFund.payin,
            availableCash: latestFund.availableCash + latestFund.payin,
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



app.use('/holding', protect, holdingRouter);
app.use('/fund', protect, fundRouter);
app.use('/order', protect, orderRouter);
app.use('/position', protect, positionRouter);
app.use('/userApp', userAppRouter);
app.use('/withdraw', protect, withdrawRouter);
app.use('/user', userRouter);

app.get('/user', protect, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send(user);
});

app.get('/api/price/:symbol', protect, wrapAsync(async (req, res) => {
  let { symbol } = req.params;
  const result = await yahooFinance.quote(symbol);

  if (!result || !result.regularMarketPrice) {
    return res.status(404).json({
      error: 'NotFoundError',
      message: `No price data found for symbol: ${symbol}`
    });
  }

  const { regularMarketPrice, currency } = result;
  res.json({
    price: regularMarketPrice,
    currency: currency,
  });
}));


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.name || "InternalServerError",
    message: err.message || "Something went wrong!",
  })
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});