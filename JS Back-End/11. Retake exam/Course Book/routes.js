const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const coursesController = require('./controllers/coursesController');
const { isAuth, isGuest } = require('./middlewares/authMiddleware');
const { isOwner, isNotOwner } = require('./middlewares/ownerMiddleware');

router.get('/', homeController.getHomePage);

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, authController.postLogin);
router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, authController.postRegister);
router.get('/logout', isAuth, authController.getLogout)
router.get('/profile', isAuth, authController.getProfile);

router.get('/courses', coursesController.getCatalog);
router.get('/courses/create', isAuth, coursesController.getCreate);
router.post('/courses/create', isAuth, coursesController.postCreate);
router.get('/courses/:courseId/edit', isAuth, isOwner, coursesController.getEdit);
router.post('/courses/:courseId/edit', isAuth, isOwner, coursesController.postEdit);
router.get('/courses/:courseId/delete', isAuth, isOwner, coursesController.delete);
router.get('/courses/:courseId/signUp', isAuth, isNotOwner, coursesController.signUp);
router.get('/courses/:courseId', coursesController.getDetails);

router.all('*', homeController.getErrorPage);

module.exports = router;