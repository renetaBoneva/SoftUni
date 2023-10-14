const Electronics = require('../models/Electronics');

exports.getAll = () => Electronics.find({});
exports.findById = (elId) => Electronics.findById(elId);

exports.findByNameAndType = (name, type) => Electronics.find({
    name: {$regex: `${name}`, $options: 'i'},
    type: {$regex: `${type}`, $options: 'i'}
}) 

exports.create = (name, type, production, exploitation, damages, image, price, description, owner) =>
    Electronics.create({ name, type, production, exploitation, damages, image, price, description, owner });

exports.update = (elId, newData) => Electronics.findByIdAndUpdate(elId, newData, { runValidators: true })

exports.delete = (elId) => Electronics.findByIdAndDelete(elId);

exports.buy = async (elId, userId) => {
    const el = await Electronics.findById(elId);

    if (el.owner == userId) {
        throw new Error("Owners can't buy their stock!");
    } else if (!!el.buyingList.map(x => x == userId).length) {
        throw new Error("You already bought this product!");
    }

    el.buyingList.push(userId);
    return el.save();
}

exports.isOwner = async (elId, userId) => {
    const el = await Electronics.findById(elId);

    if (el.owner == userId) {
        return true;
    } else {
        return false;
    }
}