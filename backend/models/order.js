const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String, required: true, trim: true, lowercase: true
    },
    qty: {
        type: Number, required: true, min: [1, 'Quantity must be at least 1']
    },
    price: {
        type: Number, required: true, min: [1, 'Price must be at least 1']
    },
    mode: {
        type: String, required: true, trim: true, enum: ['Buy', 'Sell']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
}
)

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;