const { Router } = require('express');
const router = Router();

const {
  getHomeController,
  getNotFound
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
  postCreatePostController
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
// not found routes
router.get('/404', getNotFound);
router.get('*', getNotFound);

module.exports = router;