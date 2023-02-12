const express = require('express');
const router = express.Router();

const cubeController = require('./controllers/cubeController')
const homeController = require('./controllers/homeController')

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/create', cubeController.getCubeController);

router.get('*', (req, res)=>{
    res.render('404');
});

module.exports = router;