const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: [true, 'First name is required!'],
            minLength: [3, 'First name should be at least 3 characters!']
        }, 
        lastName: {
            type: String,
            required: [true, 'Last name is required!'],
            minLength: [3, 'Last name should be at least 3 characters!']
        }, 
        email: {
            type: String,
            required: [true, 'Email is required!'],
            minLength: [10, 'Email should be at least 10 characters!']
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