const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const photoController = require('./controllers/photoController')
const profileController = require('./controllers/profileController')
const { isAuthenticated } = require('./middlewares/authMiddleware');

router.get('/', homeController.getHomePage)

router.get('/auth/register', authController.getRegisterPage)
router.post('/auth/register', authController.postRegisterPage)
router.get('/auth/login', authController.getLoginPage)
router.post('/auth/login', authController.postLoginPage)
router.get('/auth/logout', isAuthenticated, authController.getLogout)

router.get('/catalog', photoController.getCatalogPage)
router.get('/photos/create', isAuthenticated, photoController.getCreatePage)
router.post('/photos/create', isAuthenticated, photoController.postCreatePage)
router.get('/photos/:photoId/details', photoController.getDetailsPage)
router.get('/photos/:photoId/delete', isAuthenticated, photoController.getDelete)
router.get('/photos/:photoId/edit', isAuthenticated, photoController.getEditPage)
router.post('/photos/:photoId/edit', isAuthenticated, photoController.postEditPage)

// /photos/{{currentPhoto._id}}/addComment

router.get('/profiles/:userId', isAuthenticated, profileController.getProfilePage)


router.get('*', homeController.getErrorPage)

module.exports = router;