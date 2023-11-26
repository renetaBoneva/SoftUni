const Animal = require('../models/Animal');

exports.getAll = () => Animal.find({});

exports.findById = (animalId) => Animal.findById(animalId);

exports.findByIdAndDelete = (animalId) => Animal.findByIdAndDelete(animalId)

exports.searchByLocation = (location) => Animal.find({location: {$regex: `${location}`, $options: 'i'}})

exports.createAnimal = (name, years, kind, image, need, location, description, owner) =>
    Animal.create({ name, years, kind, image, need, location, description, owner });

exports.updateById = (animalId, newData) =>
    Animal.findByIdAndUpdate(animalId, newData)

exports.donate = async (animalId, userId) => {
    let animal = await this.findById(animalId);

    if (!!animal.donations.map(x => x == userId).length) {
        throw new Error("You've already donated!");
    } else {
        animal.donations.push(userId);
        return animal.save()
    }
}

