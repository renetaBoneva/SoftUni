const bcrypt = require('bcrypt');

const User = require('../models/User');
const jwt = require('../lib/jsonwebtoken');
const { secret } = require('../constants');

exports.findByEmail = (email) => User.findOne({ email })

exports.register = async (firstName, lastName, email, password, rePass) => {
    if (password.trim().length < 4) {
        throw new Error('Password should be at least 4 characters long!');
    }

    if (password !== rePass) {
        throw new Error('Password mismatch!');
    }

    const existingUser = await this.findByEmail(email);
    if (existingUser) {
        throw new Error('Invalid email!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({ firstName, lastName, email, password: hashedPassword });
    } catch (err) {
        return err;
    }
    return this.login(email, password);
}

exports.login = async (email, password) => {
    const user = await this.findByEmail(email);

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password!');
    }

    const payload = {
        _id: user._id,
        email,
        firstName: user.firstName,
        lastName: user.lastName,
    }

    const token = await jwt.sign(payload, secret);
    return token;
}