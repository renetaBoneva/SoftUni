const electronicsService = require('../services/electronicsService');

exports.isOwner = async (req, res, next) => {
    const elId = req.params.elId;
    const userId = req.user._id;

    const isOwner = await electronicsService.isOwner(elId, userId);

    if (isOwner) {
        next();
    } else {
        return res.status(401).render('home/404', { err: "Authorization error!" });
    }
}