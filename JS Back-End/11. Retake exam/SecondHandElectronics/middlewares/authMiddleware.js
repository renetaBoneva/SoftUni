const jwt = require('../lib/jsonwebtoken')
const { secret } = require('../constants')

exports.authentication = async (req, res, next) => {
    const token = req.cookies.auth;
    console.log('TODO change port to');

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, secret);

            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;
        }
        catch (err) {
            res.clearCookie('auth');
            return res.status(401).redirect('/error');
        }
    }

    next();
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
       return res.redirect('/login');
    }
    next();
}

exports.isGuest = (req, res, next) => {
    if (req.user) {
       return res.status(400).redirect('/error');
    }
    next();
}