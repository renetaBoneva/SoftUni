const Cube = require('../models/Cube');
const Accessory = require('../models/Accsessory');

exports.getCreateCube = (req, res) => {
    res.render('cube/create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const newCube = new Cube({ name, description, imageUrl, difficultyLevel });
    await newCube.save();

    res.redirect('/');
}

exports.getCubeDetails = async(req, res) => {
    const cubeId = req.params.cubeId;
    const ourCube = await Cube.findById(cubeId).lean();
    if (!ourCube) {
        res.redirect('/404')
    }
    res.render('cube/details', ourCube)
}

exports.getAccessoryAttach = async (req, res)=>{
    const cubeId = req.params.cubeId;
    const ourCube = await Cube.findById(cubeId).lean();
    const accessories = await Accessory.find().lean();

    res.render('accessory/attachAccessory', {ourCube, accessories})
}
