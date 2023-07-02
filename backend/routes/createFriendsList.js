const express = require('express');
const router = express.Router();
const friendsController = require('../controllers/friendsController');

router.post('/create-friends-list', friendsController.createFriendsList);

module.exports = router;
