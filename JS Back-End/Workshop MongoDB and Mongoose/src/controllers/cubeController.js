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

exports.getCubeDetails = async (req, res) => {
    const cubeId = req.params.cubeId;
    const ourCube = await Cube.findById(cubeId).populate('accessories').lean();

    if (!ourCube) {
        res.redirect('/404')
    }
    res.render('cube/details', { cube: ourCube })
}

exports.getAccessoryAttach = async (req, res) => {
    const cubeId = req.params.cubeId;
    const ourCube = await Cube.findById(cubeId).lean();
    const accessories = await Accessory
                        .find({ _id: { $nin: ourCube.accessories } })
                        .lean();

    res.render('accessory/attachAccessory', { ourCube, accessories })
}

exports.postAccessoryAttach = async (req, res) => {
    const cubeID = req.params.cubeId;
    const accessoryID = req.body.accessory;
    const cube = await Cube.findById(cubeID);
    const accessory = await Accessory.findById(accessoryID);

    cube.accessories.push(accessoryID);
    accessory.cubes.push(cubeID);

    await cube.save();
    await accessory.save();

    res.redirect(`/cubes/${cubeID}/details`)
}
