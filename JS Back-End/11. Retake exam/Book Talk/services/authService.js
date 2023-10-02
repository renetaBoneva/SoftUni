const bcrypt = require('bcrypt');

const User = require('../models/User');
const Book = require('../models/Books');
const jwt = require('../lib/jsonwebtoken');
const { secret } = require('../constants');

exports.findByEmail = (email) => User.findOne({ email });

exports.findById = (userId) => User.findById(userId);

exports.register = async (username, email, password, rePass) => {
    if (password.trim().length < 3) {
        throw new Error('Password should be at least 3 characters long!');
    }

    if (password !== rePass) {
        throw new Error('Password mismatch!');
    }

    const existingUser = await this.findByEmail(email);
    if (existingUser) {
        throw new Error('User exists!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({ username, email, password: hashedPassword });
        return this.login(email, password);
    } catch (err) {
        return err;
    }
}

exports.login = async (email, password) => {
    const user = await this.findByEmail(email);

    if (!user) {
        throw new Error('Invalid username or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password!');
    }

    const payload = {
        _id: user._id,
        email,
        username: user.username
    }

    const token = await jwt.sign(payload, secret);
    return token;
}

exports.getWishList = async (userId) => {
    let result = [];
    const allBooks = await Book.find({}).lean();

    allBooks.forEach(book => { 
        for (let id of book.wishingList){
            if(id == userId) {
                result.push(book);
                break;
            }
        }
    });


    return result;
}