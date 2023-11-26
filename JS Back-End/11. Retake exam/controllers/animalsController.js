const animalService = require('../services/animalsService');
const { getErrorMessage } = require('../utils/errorUtils')

exports.getAll = async (req, res) => {
    try {
        const animals = await animalService.getAll().lean();
        res.render('animals/catalog', { animals })
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getCreate = (req, res) => {
    res.render('animals/create')
}

exports.postCreate = async (req, res) => {
    const { name, years, kind, image, need, location, description } = req.body;
    const owner = req.user._id;

    try {
        await animalService.createAnimal(name, years, kind, image, need, location, description, owner);
        res.status(200).redirect('/animals')
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getDetails = async (req, res) => {
    const animalId = req.params.id;
    const userId = req.user?._id;
    try {
        const animal = await animalService.findById(animalId).lean();

        const viewData = {
            animal,
            isAuth: !!userId,
            isOwner: userId == animal.owner,
            isDonated: !!animal.donations.map(x => x == userId).length
        }

        res.render('animals/details', viewData)

    } catch {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })

    }
}

exports.getEdit = async (req, res) => {
    const animalId = req.params.id;

    try {
        const animal = await animalService.findById(animalId).lean();

        res.render('animals/edit', animal)

    } catch {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })

    }
}

exports.postEdit = async (req, res) => {
    const animalId = req.params.id;
    const { name, years, kind, image, need, location, description } = req.body;

    try {
        await animalService.updateById(animalId, { name, years, kind, image, need, location, description })
        res.redirect('/animals')
    } catch {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })

    }
}

exports.delete = async (req, res) => {
    const animalId = req.params.id;

    try {
        await animalService.findByIdAndDelete(animalId)
        res.redirect('/animals')
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })

    }
}

exports.donate = async (req, res) => {
    const animalId = req.params.id;
    const userId = req.user._id;

    try {
        await animalService.donate(animalId, userId)
        res.redirect(`/animals/${animalId}`)
    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })

    }
}

exports.search = async (req, res) => {
    const { location } = req.params;
    try {
        const animals = await animalService.searchByLocation(location);

    } catch (err) {
        console.log(err);
        res.status(400).render('home/404', { err: getErrorMessage(err) })

    }
}