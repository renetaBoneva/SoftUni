const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getRegisterPage = (req, res) => {
    res.render('auth/register')
}

exports.postRegisterPage = async (req, res) => {
    const { username, email, password, rePass } = req.body;

    try{        
        const token = await authService.register( username, email, password, rePass);
        res.cookie('auth', token)
        return res.redirect('/');
    }catch(err){
        return res.status(404).render('auth/register', {errMessage: getErrorMessage(err)});
    }
}

exports.getLoginPage = (req, res) => {
    res.render('auth/login')
}

exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
}

exports.postLoginPage = async (req, res) => {
    const { username, password } = req.body;

    try{        
        const token = await authService.login( username, password);
        res.cookie('auth', token)
        res.redirect('/');
    }catch(err){
        return res.status(404).render('auth/login', {errMessage: getErrorMessage(err)});
    }
}
