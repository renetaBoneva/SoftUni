const Post = require('../models/Post');

exports.getAll = () => Post.find({});

exports.findById = (postId) => Post.findById(postId);

exports.getMyPosts = async (userId) => {
    let myPosts = [];
    const allPosts = await Post.find({}).lean();
    allPosts.forEach(post => post.owner._id == userId ? myPosts.push(post) : '');
    return myPosts;
}

exports.create = (name, species, skinColor, eyeColor, image, description, owner) =>
    Post.create({ name, species, skinColor, eyeColor, image, description, owner });

exports.getOneAndVote = async (postId, userId) => {
    const post = await Post.findById(postId);

    if (post.owner == userId) {
        throw new Error('Authors can\'t vote for their own posts!');
    }

    if (post.votes.includes(userId)) {
        throw new Error('You already have voted for this post!');
    }

    post.votes.push(userId);
    return post.save();
}

exports.findByIdAndUpdate = async (postId, newData, userId) => {
    const post = await Post.findById(postId);

    if (post.owner != userId) {
        throw new Error('Authorization error!');
    }

    return Post.findByIdAndUpdate(postId, newData, { runValidators: true });
}

exports.findByIdAndDelete = async (postId, userId) => {
    const post = await Post.findById(postId);

    if (post.owner != userId) {
        throw new Error('Authorization error!');
    }

    return Post.findByIdAndDelete(postId);
}