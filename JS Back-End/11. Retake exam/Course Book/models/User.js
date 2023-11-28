const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Username is required!'],
            minLength: [2, 'The username should be at least 2 characters long!'],
        }, 
        email: {
            type: String,
            required: [true, 'Email is required!'],
            minLength: [10, 'The email should be at least 10 characters long!'],
        }, 
        password: {
            type: String,
            required: [true, 'Password is required!']
        },
        myCourses: [{
            type: mongoose.Types.ObjectId,
            ref: 'Course'
        }],
        mySignedUp: [{
            type: mongoose.Types.ObjectId,
            ref: 'Course'
        }]
})

// userSchema.virtual('rePass').set(function(value){
//    if(this.password !== value) {
//     throw new mongoose.Error('Password mismatch!')
//    }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;