const router = require('express').Router();

const Accessory = require('../models/Accsessory');

router.get('/create', (req, res) => {
    res.render('accessory/createAccessory');
})
router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body;
    await Accessory.create({ name, description, imageUrl });

    res.redirect('/');
})

module.exports = router;