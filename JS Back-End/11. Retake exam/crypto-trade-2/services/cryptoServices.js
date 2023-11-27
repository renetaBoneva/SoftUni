const Crypto = require('../models/Crypto');

exports.getAll = () => Crypto.find({});
exports.findById = (cryptoId) => Crypto.findById(cryptoId);

exports.create = (name, image, price, description, payment, owner) =>
    Crypto.create({ name, image, price, description, payment, owner });

exports.updateById = (cryptoId, newData) => Crypto.findByIdAndUpdate(cryptoId, newData);

exports.buy = async(cryptoId, userId) => {
    const crypto = await this.findById(cryptoId);

    if(!!crypto.buyers.map(x => x == userId).length) {
        throw new Error('You already bought these crypto coins.')
    }

    crypto.buyers.push(userId);
    return crypto.save();
}

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);