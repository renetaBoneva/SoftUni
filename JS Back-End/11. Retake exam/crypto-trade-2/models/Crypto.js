const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'The Name should be at least two characters.']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Invalid image URL!'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'The Price should be a positive number.']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'The Description should be at least 10 characters.']
    },
    payment: {
        type: String,
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: 'Invalid payment method!'
        },
        required: [true, 'Payment method is required!']
    },
    buyers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Crypto = mongoose.model("Crypto", cryptoSchema);
module.exports = Crypto;