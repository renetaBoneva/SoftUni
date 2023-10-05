const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required!'],
        minLength: [1, 'Invalid first name!']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!'],
        minLength: [1, 'Invalid last name!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/gm, 'Invalid email!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    }
})

// userSchema.virtual('rePass').set(function(value){
//    if(this.password !== value) {
//     throw new mongoose.Error('Password mismatch!')
//    }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;