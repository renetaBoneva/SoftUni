const Animal = require('../models/Animal');

exports.getAll = () => Animal.find({});

exports.getOneById = (animalId) => Animal.findOne({ _id: animalId });

exports.searchByLocation = async (location) => {
    const animals = await Animal.find({});
    let filtered = [];
    animals.forEach(animal => animal.location.toLowerCase().includes(location) ? filtered.push(animal) : '');
    return filtered;
}

exports.create = (name, years, kind, image, need, location, description, owner) =>
    Animal.create({ name, years, kind, image, need, location, description, owner });

exports.getLastThree = () => Animal.find({}).sort({ _id: -1 }).limit(3);

exports.getOneByIdAndVote = async (animalId, userId) => {
    try {
        const animal = await Animal.findById(animalId);

        if (animal.owner == userId) {
            throw new Error('Authorization error!');
        }

        if (!!animal.donators.filter(x => x == userId).length) {
            throw new Error('You already have donated!');
        }

        animal.donators.push(userId);
        return animal.save();
    } catch (err) {
        throw err;
    }
}

exports.editById = async (animalId, userId, newData) => {
    try {
        const animal = await Animal.findById(animalId);

        if (animal.owner != userId) {
            throw new Error('Authorization error!');
        }

        const updatedAnimal = await Animal.findByIdAndUpdate(animalId, newData, { runValidators: true });

        return updatedAnimal;
    } catch (err) {
        throw err;
    }
}

exports.deleteByIdAndOwner = async (animalId, userId) => {
    try {
        const animal = await Animal.findById(animalId);

        if (animal.owner != userId) {
            throw new Error('Authorization error!');
        }

        return Animal.findByIdAndDelete(animalId);
    } catch (err) {
        throw err;
    }
}