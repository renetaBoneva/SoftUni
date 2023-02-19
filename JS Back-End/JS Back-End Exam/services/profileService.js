const User = require('../models/User');
const Photo = require('../models/Photo');

exports.getUserByID = (id) => User.findById(id).lean();
exports.getPhotoByID = (id) => Photo.findById(id).lean();
exports.getUsersPhotos = (id) =>  Photo.find({owner: id}).lean();