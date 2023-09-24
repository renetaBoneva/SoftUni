const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, 'Name should be at least two characters']
    },
    imageUrl: {
        type: String,
        required: [true, "Image is required!"],
        validate: [/^https?:\/\//, 'Invalid image URL!']
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: 0
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [10, 'Description should be at least 10 characters long.']
    },
    paymentMethod: {
        type: String,
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: 'Invalid payment method!'
        },
        required: [true, "Payment method is required!"]
    },
    buyers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;