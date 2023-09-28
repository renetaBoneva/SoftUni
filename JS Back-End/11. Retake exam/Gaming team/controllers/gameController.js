const gameService = require('../services/gameService');
const { getErrorMessage } = require('../utils/errorUtils');
const { platforms } = require('../constants');

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

    try {
        await gameService.create(name, image, price, genre, description, platform = 'online', owner);

        res.status(201).redirect('/games');
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) });
    }
}

exports.getDetails = async (req, res) => {
    const gameId = req.params.gameId;
    const userId = req.user?._id;

    try {
        const game = await gameService.getOneById(gameId).lean();
        const viewData = {
            game,
            isOwner: game.owner == userId,
            isBought: !!game.boughtBy.map(x => x == userId).length,
        };

        res.status(200).render('games/details', viewData)
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) });
    }
}

exports.getEdit = async (req, res) => {
    const gameId = req.params.gameId;

    try {
        const game = await gameService.getOneById(gameId).lean();

        const viewPlatforms = platforms.map(x => {
            return {
                value: x,
                label: x,
                isSelected: x == game.platform
            }
        });

        viewData = {
            platforms: viewPlatforms,
            game
        }

        res.status(200).render(`games/edit`, viewData);
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) });
    }
}

exports.postEdit = async (req, res) => {
    const gameId = req.params.gameId;
    const { name, platform, image, price, genre, description } = req.body;

    try {
        await gameService.editById(gameId, { name, platform, image, price, genre, description });

        res.status(200).redirect(`/games/${gameId}/details`);
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) });
    }
}

exports.delete = async (req, res) => {
    const gameId = req.params.gameId;

    try {
        await gameService.delete(gameId);

        res.status(200).redirect(`/games`)
    } catch (err) {
        console.log(err);
        res.status(401).render('home/404', { err: getErrorMessage(err) });
    }
}

exports.buy = async (req, res) => {
    const gameId = req.params.gameId;
    const userId = req.user?._id;

    try {
        await gameService.buy(gameId, userId);

        res.status(200).redirect(`/games/${gameId}/details`)
    } catch (err) {
        console.log(err);
        res.status(403).render('home/404', { err: getErrorMessage(err) });
    }
}

exports.search = async (req, res) => {
    let { name, platform } = req.query;
    name = name.trim();

    try {
        const games = await gameService.filterByNameAndPlatform(name, platform);

        let viewPlatforms = platforms.map(x => {
            return {
                value: x,
                label: x,
                isSelected: x == platform
            }
        });
        viewPlatforms.push({
            value: '',
            label: '-------',
            isSelected: !platform,
        })

        viewData = {
            platforms: viewPlatforms,
            games,
            name
        }


        res.render('games/search', viewData);
    } catch (err) {
        console.log(err);
        res.status(403).render('home', { err: getErrorMessage(err) });
    }
}
