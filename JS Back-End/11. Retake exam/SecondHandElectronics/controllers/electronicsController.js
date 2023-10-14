const electronicsService = require('../services/electronicsService');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getCreate = (req, res) => {
    res.render('electronics/create');
}

exports.postCreate = async (req, res) => {
    const { name, type, production, exploitation, damages, image, price, description } = req.body;
    const owner = req.user._id;

    try {
        await electronicsService.create(name, type, production, exploitation, damages, image, price, description, owner)
        res.redirect('/electronics');
    } catch (err) {
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.getCatalog = async (req, res) => {
    try {
        const electronics = await electronicsService.getAll().lean();
        res.render('electronics/catalog', { electronics });
    } catch (err) {
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.getDetails = async (req, res) => {
    const elId = req.params.elId;
    const userId = req.user?._id;

    try {
        const el = await electronicsService.findById(elId).lean();

        const viewData = {
            el,
            isOwner: el.owner == userId,
            isBought: !!el.buyingList.map(x => x == userId).length
        }

        res.render('electronics/details', viewData);
    } catch (err) {
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.getEdit = async (req, res) => {
    const elId = req.params.elId;

    try {
        const el = await electronicsService.findById(elId).lean();

        res.render('electronics/edit', { el });
    } catch (err) {
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.postEdit = async (req, res) => {
    const elId = req.params.elId;
    const { name, type, production, exploitation, damages, image, price, description } = req.body;

    try {
        await electronicsService.update(elId, { name, type, production, exploitation, damages, image, price, description });

        res.redirect(`/electronics/${elId}/details`);
    } catch (err) {
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.delete = async (req, res) => {
    const elId = req.params.elId;

    try {
        await electronicsService.delete(elId);

        res.redirect(`/electronics`);
    } catch (err) {
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.buy = async (req, res) => {
    const elId = req.params.elId;
    const userId = req.user._id;

    try {
        await electronicsService.buy(elId, userId);
        res.redirect(`/electronics/${elId}/details`);
    } catch (err) {
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}

exports.getSearch = async (req, res) => {
    const { name, type } = req.query;
    
    try {
        const electronics = await electronicsService.findByNameAndType(name, type).lean();
        
        res.render(`electronics/search`, { electronics });
    } catch (err) {
        res.status(400).render('home', { err: getErrorMessage(err) });
    }
}