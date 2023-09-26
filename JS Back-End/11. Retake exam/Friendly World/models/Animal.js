const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Animal name is required!'],
        minLength: [2, 'Animal name should be at least 2 characters long!'],
    },
    years: {
        type: Number,
        require: [true, 'Animal age is required!'],
        min: [1, 'Invalid animal age!'],
        max: [100, 'Invalid animal age!'],
    },
    kind: {
        type: String,
        require: [true, 'Animal kind is required!'],
        minLength: [3, 'Animal kind should be at least 3 characters long!'],
    },
    image: {
        type: String,
        require: [true, 'Animal image is required!'],
        validate: /^https?:\/\//
    },
    need: {
        type: String,
        require: [true, 'Animal location is required!'],
        minLength: [3, 'Animal need should be at least 3 characters long!'],
        maxLength: [20, 'Animal need should be at no longer than 20 characters!'],
    },
    location: {
        type: String,
        require: [true, 'Animal location is required!'],        
        minLength: [5, 'Animal location should be at least 5 characters long!'],
        maxLength: [15, 'Animal location should be at no longer than 15 characters!'],

    },
    description: {
        type: String,
        require: [true, 'Animal description is required!'],
        minLength: [5, 'Animal description should be at least 5 characters long!'],
        maxLength: [50, 'Animal description should be at no longer than 50 characters!'],
    },
    donators: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;