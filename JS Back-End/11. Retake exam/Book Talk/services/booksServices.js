const Book = require('../models/Books');

exports.getAll = () => Book.find({});

exports.getBookById = (bookId) => Book.findById(bookId);

exports.create = (title, author, genre, stars, image, review, owner) =>
    Book.create({ title, author, genre, stars, image, review, owner });

exports.addWish = async (bookId, userId) => {
    const book = await Book.findById(bookId);

    if (book.owner == userId) {
        throw new Error('Authentication errors!');
    }

    if (!!book.wishingList.map(x => x == userId).length) {
        throw new Error('You already added the book to your wish list!');
    }

    book.wishingList.push(userId);
    return book.save();
}