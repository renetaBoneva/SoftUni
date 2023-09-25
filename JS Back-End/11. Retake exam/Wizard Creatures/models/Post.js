const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters long!'], 
    },
    species: {
        type: String,
        required: [true, 'Species is required!'],
        minLength: [3, 'Spices should be at least 3 characters long!'], 
    },
    skinColor: {
        type: String,
        required: [true, 'Skin color is required!'],
        minLength: [3, 'Skin color should be at least 3 characters long!'], 
    },
    eyeColor: {
        type: String,
        required: [true, 'Eye color is required!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: /^https?:\/\//
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description should be at least 3 characters long!'], 
        maxLength: [500, 'Description should be no longer than 500 characters!'], 
    },
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;