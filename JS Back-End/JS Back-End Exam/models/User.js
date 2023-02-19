const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "The username is required!"],
        minLength: [2, 'The username should be at least 2 characters long.']
    },
    email: {
        type: String,
        required: [true, "The email is required!"],
        minLength: [10, 'The email should be at least 10 characters long.']

    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [4, 'The password should be at least 4 characters long.']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;