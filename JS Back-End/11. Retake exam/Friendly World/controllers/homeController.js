const animalService = require('../services/animalService');

exports.getHomePage = async (req, res) => {
    try {
        const animals = await animalService.getLastThree().lean()

        res.render('home', { animals });
    } catch (err) {
        res.status(400).render('home', { err: err.message })
    }
}

exports.getErrorPage = (req, res) => {
    res.render('home/404');
}