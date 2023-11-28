const Course = require('../models/Course');
const User = require('../models/User');

exports.getAll = () => Course.find({});
exports.getLast3 = () => Course.find({}).sort({ _id: -1 }).limit(3);
exports.findById = (courseId) => Course.findById(courseId);

exports.create = async (title, type, certificate, image, description, price, owner) => {
    let user = await User.findById(owner);
    const course = await Course.create({ title, type, certificate, image, description, price, owner })

    user.myCourses.push(course._id);
    return user.save();
};

exports.update = (courseId, newData) => Course.findByIdAndUpdate(courseId, newData, { runValidators: true })

exports.signUp = async (courseId, userId) => {
    let course = await Course.findById(courseId);
    let user = await User.findById(userId);

    let isUserSignedUp = false;
    course.signUpList.forEach(x => x == userId ? isUserSignedUp = true : '');
    if (isUserSignedUp) {
        throw new Error('You\'ve already signed up for this course!')
    }

    course.signUpList.push(userId);
    user.mySignedUp.push(courseId);
    user.save();
    return course.save();
}

exports.delete = (courseId) => Course.findByIdAndDelete(courseId);
