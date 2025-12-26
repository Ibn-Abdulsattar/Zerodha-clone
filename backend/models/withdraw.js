// models/Withdraw.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const withdrawSchema = new Schema({
  withdraw_amount: {
    type: Number,
    required: true,
    min: [1, 'Minimum withdrawal is Rs.1'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Withdraw || mongoose.model('Withdraw', withdrawSchema);
