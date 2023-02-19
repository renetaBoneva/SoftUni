const { getErrorMessage } = require('../utils/errorUtils');
const profileService = require('../services/profileService');

exports.getProfilePage = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await profileService.getUserByID(userId);
        const userPhotos = await profileService.getUsersPhotos(userId);
        const photoCount = userPhotos.length;
        const isPhoto = photoCount > 0; 

        res.render('profile', {user, userPhotos, photoCount, isPhoto})
    }catch(err){
        return res.status(404).render('home', {errMessage: getErrorMessage(err)});
    }
}
