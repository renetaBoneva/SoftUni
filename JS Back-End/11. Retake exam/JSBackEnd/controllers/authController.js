const authService = require('../services/authService')

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
        res.end();
    }
}

exports.getRegister = (req, res) => {
    res.render('auth/register')
}

exports.postRegister = async (req, res) => {
    //TODO check if the input is the same
    const { username, email, password, rePass } = req.body;

    try {
        await authService.register(username, email, password, rePass)
       
        //TODO login automatically
        res.redirect('/login')
    } catch (err) {
        console.log(err.message);
        res.end();
    }
}
