const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const gameController = require('./controllers/gameController');
const { isAuth, isGuest } = require('./middlewares/authMiddleware');

router.get('/', homeController.getHomePage);

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, authController.postLogin);
router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, authController.postRegister);
router.get('/logout', isAuth, authController.getLogout);

router.get('/games', gameController.getCatalog);
router.get('/games/create', gameController.getCreate);
router.post('/games/create', gameController.postCreate);

router.all('*', homeController.getErrorPage);

module.exports = router;