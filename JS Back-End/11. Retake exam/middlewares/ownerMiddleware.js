const animalService = require('../services/animalsService');
const { getErrorMessage } = require('../utils/errorUtils')

exports.isOwner = async (req, res, next) => {
    const userId = req.user._id;
    const animalId = req.params.id;
    let animal;

    try {
        animal = await animalService.findById(animalId).lean();
    } catch (err) {
        console.log(err);
        return res.status(400).render('home/404', { err: "Cant'find that animal!" })
    }

    if (animal.owner == userId) {
        next()
    } else {
        res.status(401).render('home/404', { err: "Unauthorized!" })
    }
}

exports.isNotOwner = async (req, res, next) => {
    const userId = req.user._id;
    const animalId = req.params.id;
    let animal;

    try {
        animal = await animalService.findById(animalId).lean();
    } catch (err) {
        console.log(err);
        return res.status(400).render('home/404', { err: "Cant'find that animal!" })
    }

    if (animal.owner != userId) {
        next()
    } else {
        res.status(401).render('home/404', { err: "Unauthorized!" })
    }
}