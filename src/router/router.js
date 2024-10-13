const { Router } = require('express');
const { getHomeController } = require('../controllers/mainControllers')
const router = Router();

router.get('/', getHomeController);

module.exports = router;