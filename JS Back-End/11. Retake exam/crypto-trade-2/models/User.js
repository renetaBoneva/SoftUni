const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Username is required!']
        }, 
        email: {
            type: String,
            required: [true, 'Email is required!'],
            minLength: [10, 'The email should be at least ten character long ']
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