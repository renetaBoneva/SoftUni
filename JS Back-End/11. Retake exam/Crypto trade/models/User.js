const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Username is required!'],
            minLength: [5, 'Username must be at least 5 characters long!']
        }, 
        email: {
            type: String,
            required: [true, 'Email is required!'],
            minLength: [10, 'Email must be at least 10 characters long!']
        }, 
        password: {
            type: String,
            required: [true, 'Password is required!'],
            minLength: [4, 'Password must be at least 4 characters long!']
        }
})

// userSchema.virtual('rePass').set(function(value){
//    if(this.password !== value) {
//     throw new mongoose.Error('Password mismatch!')
//    }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;