const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [4, 'Title should be at least 4 characters long!'],
    },
    description: {
        type: String,
        manLength: [200, 'Description should be less than 200 characters!'],
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
        enum: ["vehicles", "estate", "electronics", "furniture", "other"]
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'Category is required!'],
        min: [1, 'Price can not be negative!']
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    bidder: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },]
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;