const Cube = require('../models/Cube');
const Accessory = require('../models/Accsessory');
const cubeService = require('../services/cubeService');
const cubeUtils = require('../utils/cubeUtils');

exports.getCreateCube = (req, res) => {
    res.render('cube/create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const newCube = new Cube({ name, description, imageUrl, difficultyLevel, owner: req.user._id});
    await newCube.save();

    res.redirect('/');
}

exports.getCubeDetails = async (req, res) => {
    const cubeId = req.params.cubeId;
    const ourCube = await Cube.findById(cubeId).populate('accessories').lean();

    if (!ourCube) {
        res.redirect('/404')
    }

    let isOwner;
    if(req.user){
        isOwner = ourCube.owner == req.user._id;
    }
    res.render('cube/details', { cube: ourCube ,isOwner })
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


exports.getEditCube = async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const difficultyLevels = cubeUtils.generateDifficultuLevel(cube.difficultyLevel);

    if(!req.user._id == cube.owner){
        return res.redirect('/404');
    }

    res.render('cube/edit', { cube , difficultyLevels})
}

exports.postEditCube = async (req, res) => {
    const cubeId = req.params.cubeId;
    const { name, description, imageUrl, difficultyLevel } = req.body;


    
    await cubeService.update(cubeId, { name, description, imageUrl, difficultyLevel });
    res.redirect(`/cubes/${cubeId}/details`)
}

exports.getDeleteCube = async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const difficultyLevels = cubeUtils.generateDifficultuLevel(cube.difficultyLevel);

    res.render('cube/delete', { cube , difficultyLevels})
}

exports.postDeleteCube = async (req, res) =>{    
    const cubeId = req.params.cubeId;
    await cubeService.delete(cubeId);
    res.redirect('/');
}
