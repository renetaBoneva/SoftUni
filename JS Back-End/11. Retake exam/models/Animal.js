const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required!"],
        minLength: [2, "The name should be at least 2 characters long!"]
    },
    years: {
        type: Number,
        require: [true, "Years are required!"],
        min: 1,
        max: 100
    },
    kind: {
        type: String,
        require: [true, "Kind is required!"],
        minLength: [3, "Kind should be at least 3 characters long!"]
    },
    image: {
        type: String,
        require: [true, "Image is required!"],
        validate: [/^https?:\/\//, "Invalid image URL!"]
    },
    need: {
        type: String,
        require: [true, "Need is required!"],
        minLength: [3, "Need should be at least 3 characters long!"],
        maxLength: [20, "Need should be no longer than 20 characters long!"]
    },
    location: {
        type: String,
        require: [true, "Location is required!"],
        minLength: [5, "Location should be at least 5 characters long!"],
        maxLength: [15, "Location should be no longer than 15 characters long!"]
    },
    description: {
        type: String,
        require: [true, "Description is required!"],
        minLength: [5, "Description should be at least 5 characters long!"],
        maxLength: [50, "Description should be no longer than 50 characters long!"]
    },
    donations: [{
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