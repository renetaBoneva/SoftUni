const Auction = require('../models/Auction');

exports.getAll = () => Auction.find({});

exports.create = (title, description, category, image, price, owner) => 
    Auction.create({title, description, category, image, price, owner})