// models/Fund.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const fundSchema = new Schema({
  amount: {
    type: Number,
    min: [5, 'Amount must be at least 5'],
    required: true,
  },
  payMethod: {
    type: String,
    required: true,
    trim: true,
  },
  availableMargin: {
    type: Number,
    default: 0,
  },
  usedMargin: {
    type: Number,
    default: 0,
  },
  availableCash: {
    type: Number,
    default: 0,
  },
  payin: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Fund || mongoose.model('Fund', fundSchema);
