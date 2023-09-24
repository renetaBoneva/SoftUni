const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const cryptoController = require('./controllers/cryptoController')
const { isAuth } = require('./middlewares/authMiddleware')

router.get('/', homeController.getHomePage);
router.get('/error', homeController.getErrorPage);

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/logout', isAuth, authController.getLogout)

router.get('/crypto', cryptoController.getCatalogPage);
router.get('/crypto/create', isAuth, cryptoController.getCreateCryptoPage);
router.post('/crypto/create', isAuth, cryptoController.postCreateCrypto);
router.get('/crypto/:cryptoId/details', cryptoController.getDetailPage);
router.get('/crypto/:cryptoId/edit', isAuth, cryptoController.getEditPage);
router.post('/crypto/:cryptoId/edit', isAuth, cryptoController.postEdit);
router.get('/crypto/:cryptoId/delete', isAuth, cryptoController.getDelete);
router.get('/crypto/:cryptoId/buy', isAuth, cryptoController.buy);
router.get('/crypto/search', cryptoController.getSearch);

router.all('*', homeController.getErrorPage)

module.exports = router;