const express = require('express');
const router = express.Router();

const cubeController = require('./controllers/cubeController')
const homeController = require('./controllers/homeController')
const accessoryController = require('./controllers/accessoryController')
const authController = require('./controllers/authController')
const { isAuthenticated } = require('./middlewares/authMiddleware')

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/cubes/create', isAuthenticated, cubeController.getCreateCube);
router.post('/cubes/create', isAuthenticated, cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getCubeDetails)
router.get('/cubes/:cubeId/edit', isAuthenticated, cubeController.getEditCube)
router.post('/cubes/:cubeId/edit', isAuthenticated, cubeController.postEditCube)
router.get('/cubes/:cubeId/delete', isAuthenticated, cubeController.getDeleteCube)
router.post('/cubes/:cubeId/delete', isAuthenticated, cubeController.postDeleteCube)
router.get('/cubes/:cubeId/attach', isAuthenticated, cubeController.getAccessoryAttach)
router.post('/cubes/:cubeId/attach', isAuthenticated, cubeController.postAccessoryAttach)

router.get('/auth/register', authController.getRegisterPage)
router.post('/auth/register', authController.postRegisterPage)
router.get('/auth/login', authController.getLoginPage)
router.post('/auth/login', authController.postLoginPage)
router.get('/auth/logout', authController.logout)

router.use('/accessories', isAuthenticated, accessoryController)

router.get('*', (req, res)=>{
    res.render('404');
});

module.exports = router;