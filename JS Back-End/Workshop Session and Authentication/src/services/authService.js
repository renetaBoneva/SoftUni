const User = require('../models/User');
const jwt = require('../lib/jsonwebtoken');
const config = require('../config/index')

exports.getUserByUsername = (username) => User.findOne({ username });
exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const existingUser = await this.getUserByUsername(username);
    const isValidPassword = await existingUser.passwordValidation(password);

    if (!existingUser || !isValidPassword) {
        throw new Error('Invalid username or password!')
    }

    const payload = { _id: existingUser._id,username: existingUser.username};
    const token = await jwt.sign(payload, config.secret, {expiresIn: '2h'});
    
    return token;
}

