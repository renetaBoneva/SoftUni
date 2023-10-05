const auctionService = require('../services/auctionService');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getBrowse = async (req, res) => {
    try {
        const auctions = await auctionService.getAll().lean();

        res.render('auctions/browse', { auctions });
    } catch (err) {
        res.render('home', { err: getErrorMessage(err) });
    }
}

exports.getCreate = (req, res) => {
    res.render('auctions/create');
}

exports.postCreate = async (req, res) => {
    const { title, description, category, image, price } = req.body;
    const owner = req.user._id;

    try {
        await auctionService.create(title, description, category, image, price, owner);

        res.redirect('/auctions');
    } catch (err) {
        res.render('home', { err: getErrorMessage(err) });
    }
}