const gameService = require('../services/gameService');
const { getErrorMessage } = require('../utils/errorUtils')
exports.getCatalog = async (req, res) => {
    try {
        const games = await gameService.getAll().lean();
        res.status(200).render('games/catalog', { games });
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) });
    }
}

exports.getCreate = (req, res) => {
    res.status(200).render('games/create');
}

exports.postCreate = async (req, res) => {
    const { name, image, price, genre, description, platform } = req.body;
    const owner = req.user._id;

    console.log({ name, image, price, genre, description, platform });

    try {
        await gameService.create(name, image, price, genre, description, platform, owner);

        res.status(200).redirect('/games');
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) });
    }
}
