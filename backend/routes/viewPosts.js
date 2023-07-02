const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/view-posts', postsController.viewPosts);

module.exports = router;
