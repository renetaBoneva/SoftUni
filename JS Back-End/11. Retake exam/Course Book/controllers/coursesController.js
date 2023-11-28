const coursesService = require('../services/coursesService');
const { getErrorMessage } = require('../utils/errorUtils')

exports.getCatalog = async (req, res) => {
    try {
        const courses = await coursesService.getAll().lean();
        res.render('courses/catalog', { courses })
    } catch (err) {
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}


exports.getCreate = (req, res) => {
    res.render('courses/create');
}

exports.postCreate = async (req, res) => {
    const { title, type, certificate, image, description, price } = req.body;
    const owner = req.user._id;

    try {
        await coursesService.create(title, type, certificate, image, description, price, owner);
        res.redirect('/courses')
    } catch (err) {
        console.log(err.message);

        const viewData = {
            err: getErrorMessage(err),
            inputData: { title, type, certificate, image, description, price }
        }
        res.status(400).render('courses/create', viewData)
    }
}

exports.getDetails = async (req, res) => {
    const courseId = req.params.courseId;
    const userId = req.user?._id;
    let isUserSignedUp = false;

    try {
        const course = await coursesService.findById(courseId).populate('owner').populate('signUpList').lean();

        course.signUpList.forEach(x => x._id == userId ? isUserSignedUp = true : '');

        let viewData = {
            course,
            ownerEmail: course.owner.email,
            isEmptySignList: !!!course.signUpList.length,
            isOwner: course.owner._id == userId,
            isUserSignedUp
        }

        if (!viewData.isEmptySignList) {
            viewData.signedBy = course.signUpList.map(x => x.username).join(', ');
        }

        res.render('courses/details', viewData)
    } catch (err) {
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.getEdit = async (req, res) => {
    const courseId = req.params.courseId;

    try {
        const course = await coursesService.findById(courseId).lean();

        res.render('courses/edit', course)
    } catch (err) {
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.postEdit = async (req, res) => {
    const courseId = req.params.courseId;
    const { title, type, certificate, image, description, price } = req.body;

    try {
        await coursesService.update(courseId, { title, type, certificate, image, description, price });
        res.redirect('/courses')
    } catch (err) {
        console.log(err.message);

        const viewData = {
            err: getErrorMessage(err),
            inputData: { title, type, certificate, image, description, price }
        }
        res.status(400).render('courses/edit', viewData)
    }
}

exports.signUp = async (req, res) => {
    const courseId = req.params.courseId;
    const userId = req.user._id;

    try {
        await coursesService.signUp(courseId, userId);
        res.redirect(`/courses/${courseId}`)
    } catch (err) {
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}

exports.delete = async (req, res) => {
    const courseId = req.params.courseId;

    try {
        await coursesService.delete(courseId);
        res.redirect(`/courses`)
    } catch (err) {
        res.status(400).render('home/404', { err: getErrorMessage(err) })
    }
}
