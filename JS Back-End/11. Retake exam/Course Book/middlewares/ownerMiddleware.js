const coursesService= require('../services/coursesService');

exports.isOwner = async (req, res, next) => {
    const userId = req.user._id;
    const courseId = req.params.courseId;
    let course;

    try {
        course = await coursesService.findById(courseId).lean();
    } catch (err) {
        console.log(err);
        return res.status(400).render('home/404', { err: "Cant'find that course!" })
    }

    if (course.owner == userId) {
        next()
    } else {
        res.status(401).render('home/404', { err: "Unauthorized!" })
    }
}

exports.isNotOwner = async (req, res, next) => {
    const userId = req.user._id;
    const courseId = req.params.courseId;
    let course;

    try {
        course = await coursesService.findById(courseId).lean();
    } catch (err) {
        console.log(err);
        return res.status(400).render('home/404', { err: "Cant'find that course!" })
    }

    if (course.owner != userId) {
        next()
    } else {
        res.status(401).render('home/404', { err: "Unauthorized!" })
    }
}