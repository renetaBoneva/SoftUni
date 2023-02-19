const User = require('../models/User');
const bcrypt = require('bcrypt');

const jwt = require('../lib/jsonwebtoken');
const { secret } = require('../constants');

exports.findByUsername = (username) => User.findOne({ username });

exports.register = async (username, email, password, rePass) => {
    if(rePass == ''){
        throw new Error('Confirm Password is required!')
    }
    if (password !== rePass) {
        throw new Error('Password missmatch!')
    }

    const existingUser = await User.findOne({
        $or: [
            { username },
            { email }
        ]
    });
    if (existingUser) {
        throw new Error('User exists!')
    }

    const hashedPassword = await bcrypt.hash(password, 10)


    await User.create({ username, email, password: hashedPassword })
    return await this.login(username, password)
}

exports.login = async (username, password) => {
    const currentUser = await this.findByUsername(username).lean();
    if (currentUser) {
        const isValid = await bcrypt.compare(password, currentUser.password);
        if (!isValid) {
            throw new Error('Invalid username or password!');
        }
    } else {
        throw new Error('Invalid username or password!');
    }


    const payload = { _id: currentUser._id, username: currentUser.username };
    const token = await jwt.sign(payload, secret);

    return token;
}

