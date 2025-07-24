const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const withdrawSchema = new Schema({
    withdraw_amount: {
        type: Number,
        required: true,
        min: [1, 'Minimum withdrawal is Rs.1']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
});

const Withdraw = mongoose.model('Withdraw', withdrawSchema);

module.exports = Withdraw;