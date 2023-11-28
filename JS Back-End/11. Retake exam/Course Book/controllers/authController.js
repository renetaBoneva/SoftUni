const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getLogin = (req, res) => {
    res.render('auth/login')
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const viewData = {
            err: getErrorMessage(err),
            inputData: { email }
        }
        res.status(404).render('auth/login', viewData);
    }
}

exports.getRegister = (req, res) => {
    res.render('auth/register')
}

exports.postRegister = async (req, res) => {
    const { username, email, password, rePass } = req.body;

    try {
        const token = await authService.register(username, email, password, rePass)

        if (token.name) {
            throw token;
        }

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const viewData = {
            err: getErrorMessage(err),
            inputData: { username, email }
        }
        res.status(400).render('auth/register', viewData);
    }
}

exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/')
}


exports.getProfile = async (req, res) => {
    const email = req.user.email;

    try {
        const user = await authService.findByEmail(email).populate('myCourses').populate('mySignedUp').lean();
        
        const viewData = {
            email,
            totalCreated: user.myCourses.length,
            totalSignUp: user.mySignedUp.length,
            myCourses: user.myCourses,
            mySignedUp: user.mySignedUp
        }
        res.render('auth/profile', viewData)
    } catch (err) {
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}