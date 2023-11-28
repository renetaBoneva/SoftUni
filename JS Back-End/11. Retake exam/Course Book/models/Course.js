const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'The Title should be at least 5 characters!']
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        minLength: [3, 'The Type should be at least 3 characters!']
    },
    certificate: {
        type: String,
        required: [true, 'Certificate is required!'],
        minLength: [2, 'The Certificate should be at least 2 characters!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, "Invalid image URL!"]
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'The Description should be at least 10 characters!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [1, 'Price should be a positive number!']
    },
    signUpList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;