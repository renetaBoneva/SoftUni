const photoService = require('../services/photoService');
const profileService = require('../services/profileService');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getCatalogPage = async (req, res) => {
    const allPhotoPosts = await photoService.getAllPhotos();
    let isPosts = false;

    if (allPhotoPosts.length >= 1) {
        isPosts = true;
    }
    res.render('catalog', { allPhotoPosts, isPosts })
}

exports.getCreatePage = (req, res) => {
    res.render('photo/create')
}

exports.postCreatePage = async (req, res) => {
    const { name, age, description, location, image } = req.body;

    try {
        const userId = req.user._id;
        const create = await photoService.createPhoto({ name, age, description, location, image }, userId)
        console.log(create);
    } catch (err) {
        return res.status(404).render('photo/create', { errMessage: getErrorMessage(err) });
    }

    res.redirect('/catalog')
}

exports.getDetailsPage = async (req, res) => {
    const photoId = req.params.photoId;
    let isOwner = false;
    let isAuth = false;
    let isComment = false;

    const currentPhoto = await profileService.getPhotoByID(photoId);
    const ownerId = currentPhoto.owner[0];
    const owner = await profileService.getUserByID(ownerId);
    isComment = currentPhoto.commentList.length >= 1;

    if (req.user) {
        isAuth = true;
        const userId = req.user._id;
        
        isOwner = userId == ownerId;
    }

    res.render('photo/details', { currentPhoto, owner, isAuth, isOwner, isComment })
}

exports.getDelete = async (req, res) => {    
    const photoId = req.params.photoId; 
    try{
        await photoService.deletePhoto(photoId);
        res.redirect('/catalog')
    } catch (err) {
        return res.status(404).render('photo/create', { errMessage: getErrorMessage(err) });
    }
}

exports.getEditPage = async (req, res) => {
    const photoId = req.params.photoId; 
    const photo = await profileService.getPhotoByID(photoId);

    res.render('photo/edit', {photo});
}

exports.postEditPage = async (req, res) => {
    const photoId = req.params.photoId; 
    const { name, age, description, location, image } = req.body;
    try{
        const photo = await photoService.editPhotoByID(photoId, { name, age, description, location, image });
        res.redirect(`/photos/${photoId}/details`);
    }catch (err) {
        return res.status(404).render('photo/create', { errMessage: getErrorMessage(err) });
    }

}
