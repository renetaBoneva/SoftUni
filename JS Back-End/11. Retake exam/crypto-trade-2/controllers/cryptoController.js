const cryptoServices = require('../services/cryptoServices');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getCatalog = async (req, res) => {
    try {
        const crypto = await cryptoServices.getAll().lean();
        res.render('crypto/catalog', { crypto });
    } catch (err) {
        res.render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getCreate = (req, res) => {
    res.render('crypto/create')
}

exports.postCreate = async (req, res) => {
    const { name, image, price, description, payment } = req.body;
    const owner = req.user._id;

    try {
        await cryptoServices.create(name, image, price, description, payment, owner);
        res.redirect('/crypto');
    } catch (err) {
        res.render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getDetails = async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const userId = req.user?._id;

    try {
        const crypto = await cryptoServices.findById(cryptoId).lean();
        const viewData = {
            crypto,
            isOwner: crypto.owner == userId,
            isBought: !!crypto.buyers.map(x => x == userId).length
        }
        res.render('crypto/details', viewData);
    } catch (err) {
        res.render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getEdit = async (req, res) => {
    const cryptoId = req.params.cryptoId;
    let paymentOptions = [
        {
            key: "crypto-wallet",
            value: 'Crypto Wallet',
            selected: false
        },
        {
            key: "credit-card",
            value: 'Credit Card',
            selected: false
        },
        {
            key: "debit-card",
            value: 'Debit Card',
            selected: false
        },
        {
            key: "paypal",
            value: 'PayPal',
            selected: false
        },
    ];

    try {
        const crypto = await cryptoServices.findById(cryptoId).lean();
        paymentOptions.map(x => x.key == crypto.payment ? x.selected = true : x)

        const viewData = {
            crypto,
            paymentOptions
        }
        res.render('crypto/edit', viewData);
    } catch (err) {
        res.render('home/404', { err: getErrorMessage(err) })
    }
}

exports.postEdit = async (req, res) => {
    const { name, image, price, description, payment } = req.body;
    const cryptoId = req.params.cryptoId;

    try {
        await cryptoServices.updateById(cryptoId, {name, image, price, description, payment});
        res.redirect(`/crypto/${cryptoId}`);
    } catch (err) {
        res.render('home/404', { err: getErrorMessage(err) })
    }
}

exports.delete =  async (req, res) => {
    const cryptoId = req.params.cryptoId;

    try {
        await cryptoServices.delete(cryptoId);
        res.redirect(`/crypto`);
    } catch (err) {
        res.render('home/404', { err: getErrorMessage(err) })
    }
}

exports.buy =  async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const userId = req.user._id;

    try {
        await cryptoServices.buy(cryptoId, userId);
        res.redirect(`/crypto/${cryptoId}`);
    } catch (err) {
        res.render('home/404', { err: getErrorMessage(err) })
    }
}