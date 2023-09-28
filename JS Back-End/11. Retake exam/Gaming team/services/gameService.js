const Game = require('../models/Game')

exports.getAll = () => Game.find({});

exports.getOneById = (gameId) => Game.findById(gameId);

exports.filterByNameAndPlatform = async (name, platform) => {
    let all = await Game.find({}).lean();
    const result = [];

    if (name) {
        all.forEach(x => x.name.toLowerCase().includes(name.toLowerCase()) ? result.push(x) : '');
    }

    if (platform && platform !== '-------') {
        all.forEach(x => x.platform == platform ? result.push(x) : '');
    }
    return result;
};

exports.create = (name, image, price, genre, description, platform, owner) =>
    Game.create({ name, image, price, genre, description, platform, owner });

exports.editById = (gameId, newData) => Game.findByIdAndUpdate(gameId, newData, { runValidators: true });

exports.delete = (gameId) => Game.findByIdAndDelete(gameId);

exports.buy = async (gameId, userId) => {
    const game = await Game.findById(gameId);

    if (!!game.boughtBy.map(x => x == userId).length) {
        throw new Error('You already have bought this game!');
    }

    if (game.owner == userId) {
        throw new Error('Forbidden!');
    }

    game.boughtBy.push(userId);

    return game.save();
}

exports.isOwner = async (gameId, userId) => {
    const game = await Game.findById(gameId);

    if (game.owner != userId) {
        return false;
    }

    return true;
}