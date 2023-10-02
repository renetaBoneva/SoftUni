const booksServices = require('../services/booksServices');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getCreate = (req, res) => {
    res.render('books/create')
}

exports.getCatalog = async (req, res) => {
    try {
        const books = await booksServices.getAll().lean();

        res.render('books/catalog', { books });
    } catch (err) {
        console.log(err);
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.postCreate = async (req, res) => {
    const { title, author, genre, stars, image, review } = req.body;
    const owner = req.user._id;
    try {
        await booksServices.create(title, author, genre, stars, image, review, owner);

        res.redirect('/books')
    } catch (err) {
        console.log(err);
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.getDetails = async (req, res) => {
    const bookId = req.params.bookId;
    const userId = req.user?._id;

    try {
        const book = await booksServices.getBookById(bookId).lean();

        const viewData = {
            book,
            isOwner: book.owner == userId,
            isAddedToWish: !!book.wishingList.map(x => x == userId).length
        };

        res.render('books/details', viewData)
    } catch (err) {
        console.log(err);
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.getEdit = async (req, res) => {
    const bookId = req.params.bookId;

    try {
        const book = await booksServices.getBookById(bookId).lean();

        res.render('books/edit', { book })
    } catch (err) {
        console.log(err);
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.postEdit = async (req, res) => {
    const bookId = req.params.bookId;
    const { title, author, genre, stars, image, review } = req.body;

    try {
        await booksServices.edit(bookId, title, author, genre, stars, image, review);

        res.redirect(`/books/${bookId}/details`)
    } catch (err) {
        console.log(err);
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.delete = async (req, res) => {
    const bookId = req.params.bookId;

    try {
        await booksServices.delete(bookId);

        res.redirect(`/books`);
    } catch (err) {
        console.log(err);
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.addWish = async (req, res) => {
    const bookId = req.params.bookId;
    const userId = req.user?._id;

    try {
        await booksServices.addWish(bookId, userId);

        res.redirect(`/books/${bookId}/details`);
    } catch (err) {
        console.log(err);
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}
