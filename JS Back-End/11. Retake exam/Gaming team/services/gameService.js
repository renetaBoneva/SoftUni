const Game = require('../models/Game')

exports.getAll = () => Game.find({});

exports.create = (name, image, price, genre, description, platform, owner) =>
            Game.create({name, image, price, genre, description, platform, owner})