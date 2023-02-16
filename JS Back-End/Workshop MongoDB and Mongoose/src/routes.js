const express = require('express');
const router = express.Router();

const cubeController = require('./controllers/cubeController')
const homeController = require('./controllers/homeController')
const accessoryController = require('./controllers/accessoryController')

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/cubes/create', cubeController.getCreateCube);
router.post('/cubes/create', cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getCubeDetails)
router.get('/cubes/:cubeId/attach', cubeController.getAccessoryAttach)

router.use('/accessories', accessoryController)

router.get('*', (req, res)=>{
    res.render('404');
});

module.exports = router;