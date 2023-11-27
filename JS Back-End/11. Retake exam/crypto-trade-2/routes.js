const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const cryptoController = require('./controllers/cryptoController')
const { isAuth, isGuest } = require('./middlewares/authMiddleware')
const { isOwner, isNotOwner } = require('./middlewares/ownerMiddleware');

router.get('/', homeController.getHomePage);

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, authController.postLogin);
router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, authController.postRegister);
router.get('/logout', isAuth, authController.getLogout)

router.get('/crypto', cryptoController.getCatalog);
router.get('/crypto/create', isAuth, cryptoController.getCreate);
router.post('/crypto/create', isAuth, cryptoController.postCreate);
router.get('/crypto/:cryptoId/edit', isAuth, isOwner, cryptoController.getEdit);
router.post('/crypto/:cryptoId/edit', isAuth, isOwner, cryptoController.postEdit);
router.get('/crypto/:cryptoId/delete', isAuth, isOwner, cryptoController.delete);
router.get('/crypto/:cryptoId/buy', isAuth, isNotOwner, cryptoController.buy);
router.get('/crypto/:cryptoId', cryptoController.getDetails);

router.all('*', homeController.getErrorPage);

module.exports = router;