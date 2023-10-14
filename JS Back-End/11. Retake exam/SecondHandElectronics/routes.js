const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const electronicsController = require('./controllers/electronicsController');
const { isAuth, isGuest } = require('./middlewares/authMiddleware');
const { isOwner } = require('./middlewares/electronicsMiddleware');

router.get('/', homeController.getHomePage);

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, authController.postLogin);
router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, authController.postRegister);
router.get('/logout', isAuth, authController.getLogout)

router.get('/electronics', electronicsController.getCatalog);
router.get('/electronics/search', isAuth, electronicsController.getSearch);
router.get('/electronics/create', isAuth, electronicsController.getCreate);
router.post('/electronics/create', isAuth, electronicsController.postCreate);
router.get('/electronics/:elId/details', electronicsController.getDetails);
router.get('/electronics/:elId/edit', isAuth, isOwner, electronicsController.getEdit);
router.post('/electronics/:elId/edit', isAuth, isOwner, electronicsController.postEdit);
router.get('/electronics/:elId/delete', isAuth, isOwner, electronicsController.delete);
router.get('/electronics/:elId/buy', isAuth, electronicsController.buy);

router.all('*', homeController.getErrorPage);

module.exports = router;