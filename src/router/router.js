const { Router } = require('express');
const { getHomeController, getNotFound } = require('../controllers/mainControllers');
const { getLoginController, getRegisterController, getLogoutController } = require('../controllers/autnControllers');
const { getCreatePostController, getAllPostsController, getUserPostsController } = require('../controllers/postsController');

const router = Router();

router.get('/', getHomeController);
router.get('/login', getLoginController);
router.get('/register', getRegisterController);
router.get('/logout', getLogoutController);

router.get('/create-new-post', getCreatePostController);
router.get('/all-posts', getAllPostsController);
router.get('/my-posts', getUserPostsController);

router.get('/404', getNotFound);
router.get('*', getNotFound);

module.exports = router;