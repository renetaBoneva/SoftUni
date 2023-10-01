const booksServices = require('../services/booksServices');

exports.isOwner = async (req, res, next) => {
    const bookId = req.params.bookId;
    const userId = req.user?._id;
    const isOwner = await booksServices.isOwner(bookId, userId);

    if (isOwner) {


        return res.status(400).redirect('/error');
    } else {
        next()
    }
}