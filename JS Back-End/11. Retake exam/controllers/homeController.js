const animalsService = require('../services/animalsService');

exports.getHomePage = async (req, res) => {
    const last3 = (await animalsService.getAll().lean()).splice(-3);

    res.render('home', { animals: last3 });
}

exports.getErrorPage = (req, res) => {
    res.render('home/404');
}