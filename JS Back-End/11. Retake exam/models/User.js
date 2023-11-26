const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        email: {
            type: String,
            required: [true, 'Email is required!'],
            minLength: [10, "The email should be at least 10 characters long!"]
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