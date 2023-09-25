const postsService = require('../services/postsService');
const { getErrorMessage } = require('../utils/errorUtils')

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postsService.getAll().lean();
        res.render('posts/all-posts', { posts });
    } catch (err) {
        console.log('Error: ', getErrorMessage(err));
        res.render('/', { err: getErrorMessage(err) })
    }
}

exports.getCreatePosts = (req, res) => {
    res.render('posts/create')
}

exports.postCreatePost = async (req, res) => {
    const { name, species, skinColor, eyeColor, image, description } = req.body;
    const userId = req.user._id;

    try {
        await postsService.create(name, species, skinColor, eyeColor, image, description, owner = userId);
        res.redirect('/posts')
    }
    catch (err) {
        console.log('Error: ', getErrorMessage(err));
        res.render('posts/create', { err: getErrorMessage(err) })
    }
}

exports.getPostDetails = async (req, res) => {
    const postId = req.params.postId;
    try {
        const post = await postsService.findById(postId)
            .populate('owner')
            .populate('votes')
            .lean();

        let isVoted = false;
        post.votes.forEach(vote => vote._id == req.user?._id ? isVoted = true : '');

        const viewData = {
            post,
            author: post.owner,
            isAuthor: req.user?._id == post.owner?._id,
            votesInfo: {
                isVoted,
                count: post.votes.length,
                areVotedPeople: post.votes.length > 0,
                votedPeople: post.votes.map(x => x.email).join(', '),
            }
        }

        res.render('posts/details', viewData)
    }
    catch (err) {
        console.log('Error: ', getErrorMessage(err));
        res.render('home', { err: getErrorMessage(err) })
    }
}

exports.getEditPosts = async (req, res) => {
    let post;

    try {
        post = await postsService.findById(req.params.postId).lean();
    }
    catch (err) {
        console.log('Error: ', getErrorMessage(err));
        return res.render('home', { err: getErrorMessage(err) })
    }

    res.render('posts/edit', { post })
}

exports.postEditPosts = async (req, res) => {
    const { name, species, skinColor, eyeColor, image, description } = req.body;
    const postId = req.params.postId;
    const userId = req.user._id;

    try {
        await postsService.findByIdAndUpdate(postId, {name, species, skinColor, eyeColor, image, description}, userId)
        res.redirect(`/posts/${req.params.postId}/details`)
    }
    catch (err) {
        console.log('Error: ', getErrorMessage(err));
        res.render('home', { err: getErrorMessage(err) })
    }
}

exports.deletePost = async (req, res) => {
    try {
        await postsService.findByIdAndDelete(req.params.postId, req.user._id);
        res.redirect('/posts')
    }
    catch (err) {
        console.log('Error: ', getErrorMessage(err));
        res.render('home', { err: getErrorMessage(err) })
    }
}

exports.vote = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user._id;
    try {
        await postsService.getOneAndVote(postId, userId)
        res.redirect(`/posts/${postId}/details`)
    }
    catch (err) {
        console.log('Error: ', getErrorMessage(err));
        res.render('home', { err: getErrorMessage(err) })
    }
}


exports.getProfilePage = async (req, res) => {
    const userId = req.user._id;

    const myPosts = await postsService.getMyPosts(userId);

    const viewData = {
        user: req.user,
        posts: myPosts,
    }

    res.render('auth/my-posts', viewData)
}
