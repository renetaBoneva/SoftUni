const Photo = require('../models/Photo');

exports.createPhoto = async (data, ownerID) =>{ 
    const ourPhoto = new Photo(data);
    ourPhoto.owner.push(ownerID);

    console.log('here');
    return await ourPhoto.save();
};

exports.getAllPhotos = () => Photo.find({}).populate('owner').lean();

exports.deletePhoto = (id) => Photo.findByIdAndDelete(id);
exports.editPhotoByID = (id, data) => Photo.findByIdAndUpdate(id, data, {runValidators: true})
