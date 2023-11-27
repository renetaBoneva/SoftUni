const cryptoService = require('../services/cryptoServices');

exports.isOwner = async (req, res, next) => {
    const userId = req.user._id;
    const cryptoId = req.params.cryptoId;
    let crypto;

    try {
        crypto = await cryptoService.findById(cryptoId).lean();
    } catch (err) {
        console.log(err);
        return res.status(400).render('home/404', { err: "Cant'find that crypto!" })
    }

    if (crypto.owner == userId) {
        next()
    } else {
        res.status(401).render('home/404', { err: "Unauthorized!" })
    }
}

exports.isNotOwner = async (req, res, next) => {
    const userId = req.user._id;
    const cryptoId = req.params.cryptoId;
    let crypto;

    try {
        crypto = await cryptoService.findById(cryptoId).lean();
    } catch (err) {
        console.log(err);
        return res.status(400).render('home/404', { err: "Cant'find that crypto!" })
    }

    if (crypto.owner != userId) {
        next()
    } else {
        res.status(401).render('home/404', { err: "Unauthorized!" })
    }
}