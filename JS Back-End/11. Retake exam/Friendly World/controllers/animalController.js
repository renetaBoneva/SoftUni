const { getErrorMessage } = require('../utils/errorUtils');
const animalService = require('../services/animalService');

exports.getDashboard = async (req, res) => {
    try {
        const animals = await animalService.getAll().lean();

        res.render('animals/dashboard', { animals })
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getAddAnimal = (req, res) => {
    res.render('animals/create')
}

exports.postAddAnimal = async (req, res) => {
    const { name, years, kind, image, need, location, description } = req.body;
    const owner = req.user._id;

    try {
        await animalService.create(name, years, kind, image, need, location, description, owner);
        res.status(201).redirect('/animals');
    } catch (err) {
        console.log(err);
        res.status(400).render('animals/create', { err: getErrorMessage(err) })
    }

}

exports.getDetails = async (req, res) => {
    const animalId = req.params.animalId;

    try {
        const animal = await animalService.getOneById(animalId).lean();

        const viewData = {
            animal,
            isOwner: animal.owner == req.user?._id,
            isDonated: !!animal.donators.map(x => x == req.user?._id).length,
        }

        res.render('animals/details', viewData)
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getEdit = async (req, res) => {
    const animalId = req.params.animalId;

    try {
        const animal = await animalService.getOneById(animalId).lean();

        res.status(200).render('animals/edit', { animal })
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.postEdit = async (req, res) => {
    const animalId = req.params.animalId;
    const userId = req.user._id;
    const { name, years, kind, image, need, location, description } = req.body;

    try {
        await animalService.editById(animalId, userId, { name, years, kind, image, need, location, description });

        res.status(200).redirect(`/animals/${animalId}/details`)
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.delete = async (req, res) => {
    const animalId = req.params.animalId;
    const userId = req.user._id;

    try {
        await animalService.deleteByIdAndOwner(animalId, userId);

        res.status(200).redirect('/animals')
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.donate = async (req, res) => {
    const animalId = req.params.animalId;
    const userId = req.user._id;

    try {
        await animalService.getOneByIdAndVote(animalId, userId);

        res.redirect(`/animals/${animalId}/details`)
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getSearch = async (req, res) => {
    const { location } = req.query;

    try {
        let animals;
        if (location) {
            const locationRegex = new RegExp(`/${location}/`, 'i');
            animals = await animalService.searchByLocation(location).lean();
            console.log(animals);
        } else {
            animals = await animalService.getAll().lean();
        }
        res.render('animals/search', { animals })
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}