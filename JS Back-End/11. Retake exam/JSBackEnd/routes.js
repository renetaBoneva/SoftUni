const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')

router.get('/', homeController.getHomePage);
router.get('/error', homeController.getErrorPage);

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

module.exports = router