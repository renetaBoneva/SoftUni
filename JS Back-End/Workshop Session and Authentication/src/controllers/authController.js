
const authService = require('../services/authService');

exports.getRegisterPage = (req, res) => {
    res.render('auth/register')
}

exports.postRegisterPage = async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.redirect('/404');
    }

    const existingUser = await authService.getUserByUsername(username);
    if (existingUser) {
        return res.redirect('/404');
    }
    await authService.register(username, password);
    res.redirect('/');
}

exports.getLoginPage = (req, res) => {
    res.render('auth/login')
}

exports.postLoginPage = async (req, res) => {
    const { username, password } = req.body;
    try{
        const token = await authService.login(username, password);
        res.cookie('auth', token, {httpOnly: true});
    } catch(err){
        console.log(err.message);
        return res.redirect('/404')
    }

    res.redirect('/')
}

exports.logout = async (req, res) =>{    
    res.clearCookie('auth');

    res.redirect('/');
}