const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    product: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true, lowercase: true },
    qty: { type: Number, required: true, min: [1, 'Quantity must be at least 1'] },
    avg: { type: Number, required: true },
    mode: { type: String, required: true, trim: true },
    price: { type: Number, min: [1, 'Price must be at least 1'], required: true },
    net: { type: String, required: true, trim: true },
    day: { type: String, required: true, trim: true },
    isLoss: { type: Boolean, default: false },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
}
);

const Position = mongoose.model('Position', positionSchema);

module.exports = Position;