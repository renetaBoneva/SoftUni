const cryptoService = require('../services/cryptoService');
const { getErrorMessage } = require('../utils/errorUtils');
const { getCurrentPaymentMethod } = require('../utils/viewDataUtils')

exports.getCreateCryptoPage = (req, res) => {
    res.render('crypto/create');
}

exports.postCreateCrypto = async (req, res) => {
    const { name, imageUrl, price, description, paymentMethod } = req.body;
    const userId = req.user._id;

    try {
        await cryptoService.create(name, imageUrl, price, description, paymentMethod, userId);
        console.log(`Successfully created ${JSON.stringify({ name, imageUrl, price, description, paymentMethod })}`);
        res.redirect('/crypto');
    } catch (err) {
        console.log('Error: ' + getErrorMessage(err));
        res.render('crypto/create', { err: getErrorMessage(err) });
    }
}

exports.getCatalogPage = async (req, res) => {
    try {
        const coins = await cryptoService.getAll().lean();

        res.render('crypto/catalog', { coins });
    } catch (err) {
        console.log('Error: ' + getErrorMessage(err));
        res.render('crypto/catalog', { err: getErrorMessage(err) });
    }
}

exports.getDetailPage = async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const userId = req.user?._id;

    try {
        const crypto = await cryptoService.getOneById(cryptoId).lean();
        const isOwner = crypto.owner == userId;
        const isBuyer = !!!crypto.buyers?.find(x => x == userId);

        res.render('crypto/details', { crypto, isOwner, isBuyer })
    } catch (err) {
        console.log('Error: ' + getErrorMessage(err));
        res.render('home', { err: getErrorMessage(err) });
    }
}

exports.getEditPage = async (req, res) => {
    const cryptoId = req.params.cryptoId;
    try {
        const crypto = await cryptoService.getOneById(cryptoId).lean();
        let payment = getCurrentPaymentMethod(crypto.paymentMethod);

        res.render('crypto/edit', { crypto, payment })
    } catch (err) {
        console.log('Error: ' + getErrorMessage(err));
        res.render('home', { err: getErrorMessage(err) });
    }
}

exports.postEdit = async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const { name, imageUrl, price, description, paymentMethod } = req.body;

    try {
        await cryptoService.edit(cryptoId, { name, imageUrl, price, description, paymentMethod });

        res.redirect(`/crypto/${cryptoId}/details`)
    } catch (err) {
        console.log('Error: ' + getErrorMessage(err));
        res.render('home', { err: getErrorMessage(err) });
    }
}

exports.getDelete = async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const userId = req.user?._id;

    try {
        const crypto = await cryptoService.getOneById(cryptoId).lean();
        if (crypto.owner != userId) {
            throw new Error('Access error!')
        }

        await cryptoService.deleteById(cryptoId);
        res.redirect('/crypto')
    } catch (err) {
        console.log('Error: ' + getErrorMessage(err));
        res.status(401).render('home', { err: getErrorMessage(err) });
    }

}


exports.buy = async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const userId = req.user?._id;

    try {
        await cryptoService.buy(cryptoId, userId);
        res.redirect(`/crypto/${cryptoId}/details`);
    } catch (err) {
        console.log('Error: ' + getErrorMessage(err));
        res.render(`home`, { err: getErrorMessage(err) });
    }

}


exports.getSearch = async (req, res) => {
    let { name, paymentMethod } = req.body;
    let payment;
    const searchData = {};

    if (paymentMethod) {
        payment = getCurrentPaymentMethod(paymentMethod);
        searchData.paymentMethod = paymentMethod;
        console.log(payment);
    } else {
        payment = getCurrentPaymentMethod('crypto-wallet');
    }

    if (name) {
        searchData.name = name;
    }

    try {
        const coins = await cryptoService.getSearched(searchData).lean();

        res.render('crypto/search', { payment, coins, name})
    } catch (err) {
        console.log('Error: ' + getErrorMessage(err));
        res.render(`home`, { err: getErrorMessage(err) });
    }

}