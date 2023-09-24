const Crypto = require('../models/Crypto');

exports.getAll = () => Crypto.find({});

exports.getOneById = (id) => Crypto.findById(id);

exports.getSearched = (searchData) => Crypto.find(searchData);

exports.create =
    (name, imageUrl, price, description, paymentMethod, userId) => Crypto.create({ name, imageUrl, price, description, paymentMethod, owner: userId });

exports.buy = async (cryptoId, userId) => {
    const crypto = await Crypto.findById(cryptoId);

    if (userId == crypto.owner) {
        throw new Error('Owners can\'t buy their stock!');
    } else if (crypto.buyers.find(x => x == userId)) {
        throw new Error('You already bought this stock!');
    }

    crypto.buyers.push(userId);
    return crypto.save();
}

exports.edit = (cryptoId, newData) => Crypto.findByIdAndUpdate(cryptoId, newData, { runValidators: true });

exports.deleteById = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);