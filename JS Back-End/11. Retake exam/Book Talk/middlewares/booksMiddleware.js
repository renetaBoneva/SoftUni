const booksServices = require('../services/booksServices');

exports.isOwner = async (req, res, next) => {
    const bookId = req.params.bookId;
    const userId = req.user?._id;
    const isOwner = await booksServices.isOwner(bookId, userId);

    if (isOwner) {
        next()
    } else {
        return res.status(400).render('home/404', {err: 'Authentication error!'});
    }
}