const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, 'The username must be at least 3 characters long!']
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'The password must be at least 3 characters long!']
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash
        next();
    });
})

userSchema.method('passwordValidation', function(password){
    return bcrypt.compare(password, this.password);
})

const User = mongoose.model('User', userSchema);
module.exports = User;