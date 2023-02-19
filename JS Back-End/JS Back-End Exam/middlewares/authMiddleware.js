const config = require('../constants');
const jwt = require('../lib/jsonwebtoken');


exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if(token){
        try{
            const decodedToken = await jwt.verify(token, config.secret);
            req.user = decodedToken;

            res.locals.isAuthenticated = true;
            res.locals.user = decodedToken;
        } catch(err){
            res.clearCookie('auth');
            res.status(401).redirect('/404');
        }
    }

    next()
}

exports.isAuthenticated = (req, res, next) => {
    if(!req.user){
        return res.status(404).render('auth/login', {errMessage: 'Before this action you must log in!'});
    }
    next()
};