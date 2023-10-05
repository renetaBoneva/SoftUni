const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const auctionController = require('./controllers/auctionController');
const { isAuth, isGuest } = require('./middlewares/authMiddleware');

router.get('/', homeController.getHomePage);

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, authController.postLogin);
router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, authController.postRegister);
router.get('/logout', isAuth, authController.getLogout);

router.get('/auctions', auctionController.getBrowse);
router.get('/auctions/create', isAuth, auctionController.getCreate);
router.post('/auctions/create', isAuth, auctionController.postCreate);

router.all('*', homeController.getErrorPage);

module.exports = router;