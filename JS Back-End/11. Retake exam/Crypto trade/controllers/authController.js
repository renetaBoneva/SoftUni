const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getLogin = (req, res) => {
    res.render('auth/login')
}

exports.postLogin = async (req, res) => {
    //TODO check if the input is the same
    const { email, password } = req.body;
    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.status(404).render('auth/login', { err: getErrorMessage(err) });
    }
}

exports.getRegister = (req, res) => {
    res.render('auth/register')
}

exports.postRegister = async (req, res) => {
    //TODO check if the input is the same
    const { username, email, password, rePass } = req.body;

    try {
        const token = await authService.register(username, email, password, rePass)

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.status(400).render('auth/register', { err: getErrorMessage(err) });
    }
}

exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/')
}