const Cube = require('../models/Cube');
const db = require('../db.json')

exports.getCreateCube = (req, res)=>{
    res.render('create');
};

exports.postCreateCube = (req, res)=>{
    const {name, description, imageUrl, difficultyLevel} = req.body;
    const newCube = new Cube(name, description, imageUrl, difficultyLevel);
    newCube.save();

    res.redirect('/');
}

exports.getCubeDetails = (req, res) => {
    const cubeId = req.params.cubeId;
    const ourCube = db.cubes.find(cube => cube.id == cubeId );
    if(!ourCube){
        res.redirect('/404')
    }
    res.render('details', ourCube)
}
