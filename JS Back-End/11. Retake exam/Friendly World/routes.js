const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const animalController = require('./controllers/animalController')
const { isAuth, isGuest } = require('./middlewares/authMiddleware')

router.get('/', homeController.getHomePage);

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, authController.postLogin);
router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, authController.postRegister);
router.get('/logout', isAuth, authController.getLogout)

router.get('/search', animalController.getSearch);

router.get('/animals', animalController.getDashboard);
router.get('/animals/add', isAuth, animalController.getAddAnimal);
router.post('/animals/add', isAuth, animalController.postAddAnimal);
router.get('/animals/:animalId/details', animalController.getDetails);
router.get('/animals/:animalId/edit', isAuth, animalController.getEdit);
router.post('/animals/:animalId/edit', isAuth, animalController.postEdit);
router.get('/animals/:animalId/delete', isAuth, animalController.delete);
router.get('/animals/:animalId/donate', isAuth, animalController.donate);

router.all('*', homeController.getErrorPage);

module.exports = router;