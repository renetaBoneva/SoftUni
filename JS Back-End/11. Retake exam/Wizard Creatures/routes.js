const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const postsController = require('./controllers/postsController');
const { isAuth } = require('./middlewares/authMiddleware');

router.get('/', homeController.getHomePage);

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/logout', isAuth, authController.getLogout)

router.get('/profile', isAuth, postsController.getProfilePage);

router.get('/posts', postsController.getAllPosts);
router.get('/posts/create', isAuth, postsController.getCreatePosts);
router.post('/posts/create', isAuth, postsController.postCreatePost);
router.get('/posts/:postId/details', postsController.getPostDetails);
router.get('/posts/:postId/edit',  isAuth, postsController.getEditPosts);
router.post('/posts/:postId/edit',  isAuth, postsController.postEditPosts);
router.get('/posts/:postId/delete', isAuth, postsController.deletePost);
router.get('/posts/:postId/vote',  isAuth, postsController.vote);

router.all('*', homeController.getErrorPage);

module.exports = router;