const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is required!"],
        minLength: [2, 'The username should be at least 2 characters long.']
    }, 
    image: {
        type: String,
        required: [true, "The image is required!"],
        match: [/^https?:\/\//, 'Invalid URL!']
        
    },
    age: {
        type: Number,
        required: [true, "The age is required!"],
        min: [1, 'The age should be at least 1 and no longer than 100 characters.'],
        max: [100, 'The age should be at least 1 and no longer than 100 characters.']
        
    }, 
    description: {
        type: String,
        required: [true, "The description is required!"],
        minLength: [5, 'The description should be at least 5 and no longer than 50 characters.'],
        maxLength: [50, 'The description should be at least 5 and no longer than 50 characters.'],        
    }, 
    location: {
        type: String,
        required: [true, "The location is required!"],
        minLength: [5, 'The location should be at least 5 and no longer than 50 characters.'],
        maxLength: [50, 'The location should be at least 5 and no longer than 50 characters.'],
        
    },
    commentList : [{
        type: Object
    }],
    owner : [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
