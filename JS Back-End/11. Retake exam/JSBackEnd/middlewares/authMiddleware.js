const jwt = require('../lib/jsonwebtoken')
const { secret } = require('../constants')

exports.authentication = async (req, res, next) => {
    const token = req.cookies.auth;

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, secret);

            req.user = decodedToken;
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