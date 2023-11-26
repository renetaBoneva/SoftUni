const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const animalsController = require('./controllers/animalsController')
const { isAuth, isGuest } = require('./middlewares/authMiddleware')
const { isOwner, isNotOwner } = require('./middlewares/ownerMiddleware');

router.get('/', homeController.getHomePage);

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, authController.postLogin);
router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, authController.postRegister);
router.get('/logout', isAuth, authController.getLogout)

router.get('/animals', animalsController.getAll)
router.get('/animals/create', isAuth, animalsController.getCreate)
router.post('/animals/create', isAuth, animalsController.postCreate)
router.get('/animals/:id', animalsController.getDetails)
router.get('/animals/:id/edit', isAuth, isOwner, animalsController.getEdit)
router.post('/animals/:id/edit', isAuth, isOwner, animalsController.postEdit)
router.get('/animals/:id/delete', isAuth, isOwner, animalsController.delete)
router.get('/animals/:id/donate', isAuth, isNotOwner, animalsController.donate)
router.get('/animals/search', animalsController.search)

router.all('*', homeController.getErrorPage);

module.exports = router;