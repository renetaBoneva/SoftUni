const gameService = require('../services/gameService');

exports.isOwner = async (req, res, next) => {
    const gameId = req.params.gameId;
    const userId = req.user._id;

    const isOwner = await gameService.isOwner(gameId, userId);

    if(isOwner) {
        next();
    } else {
        res.status(403).render('home/404', {err: 'Authorization error!'});
    }
}