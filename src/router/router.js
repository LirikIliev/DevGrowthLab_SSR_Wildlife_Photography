const { Router } = require('express');
const router = Router();

const {
  getHomeController,
  getNotFoundController
} = require('../controllers/mainControllers');
const {
  getLoginController,
  getRegisterController,
  getLogoutController,
  postRegisterController,
  postLoginController
} = require('../controllers/autnControllers');
const {
  getCreatePostController,
  getAllPostsController,
  getUserPostsController,
  postCreatePostController,
  getPostDetailController,
  getIncreasePostVoteController,
  getDecreasePostVoteController,
  getEditPostController,
  postEditPostController,
  getDeletePostController
} = require('../controllers/postsController');

router.get('/', getHomeController);
//* auth routes
router.get('/login', getLoginController);
router.post('/login', postLoginController);
router.get('/register', getRegisterController);
router.post('/register', postRegisterController);
router.get('/logout', getLogoutController);
//* post routes
router.get('/create-new-post', getCreatePostController);
router.post('/create-new-post', postCreatePostController);
router.get('/all-posts', getAllPostsController);
router.get('/my-posts', getUserPostsController);
router.get('/edit-post/:postId', getEditPostController);
router.post('/edit-post/:postId', postEditPostController);
router.get('/delete-post/:postId', getDeletePostController);
router.get('/post-details/:postId', getPostDetailController);
router.get('/post-details/increase-vote/:postId', getIncreasePostVoteController);
router.get('/post-details/decrease-vote/:postId', getDecreasePostVoteController);
// not found routes
router.get('/404', getNotFoundController);
router.get('*', getNotFoundController);

module.exports = router;