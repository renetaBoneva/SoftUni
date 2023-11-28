const coursesService = require('../services/coursesService');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getHomePage = async (req, res) => {
    try {
        const courses = await coursesService.getLast3().lean();
        res.render('home', { courses })
    } catch (err) {
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getErrorPage = (req, res) => {
    res.render('home/404');
}