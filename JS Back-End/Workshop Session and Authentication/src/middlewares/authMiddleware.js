const config = require('../config/index');
const jwt = require('../lib/jsonwebtoken');

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if(token){
        try{
            const decodedToken = await jwt.verify(token, config.secret);
            req.user = decodedToken;
            req.isAuthenticated = true;

            res.locals.isAuthenticated = true;
            res.locals.username = decodedToken.username;
        } catch(err){
            console.log(err.message);
            res.clearCookie('auth');
            res.redirect('/404');
        }
    }

    next()
}

exports.isAuthenticated = (req, res, next) => {
    if(!req.isAuthenticated){
        return res.redirect('/auth/login');
    }
    next();
}