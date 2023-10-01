const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const booksController = require('./controllers/booksController');
const { isAuth, isGuest } = require('./middlewares/authMiddleware');

router.get('/', homeController.getHomePage);

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, authController.postLogin);
router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, authController.postRegister);
router.get('/logout', isAuth, authController.getLogout);

router.get('/books', booksController.getCatalog);
router.get('/books/create', isAuth, booksController.getCreate);
router.post('/books/create', isAuth, booksController.postCreate);
router.get('/books/:bookId/details', booksController.getDetails);
// router.get('/books/:bookId/edit', booksController.getDetails);
router.get('/books/:bookId/delete', isAuth, booksController.delete);
router.get('/books/:bookId/add-wish', isAuth, booksController.addWish)

router.all('*', homeController.getErrorPage);

module.exports = router;