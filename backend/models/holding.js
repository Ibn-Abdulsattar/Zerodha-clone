const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holdingSchema = new Schema({
    name: {
        type: String, required: true, lowercase: true
    },
    qty: {
        type: Number, required: true, min: [1, 'Quantity must be at least 1']
    },
    avg: {
        type: Number, required: true
    },
    price: {
        type: Number, required: true, min: [1, 'Price must be at least 1']
    },
    net: {
        type: String, required: true
    },
    day: {
        type: String, required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
}
);

const Holding = mongoose.model("Holding", holdingSchema);

module.exports = Holding;