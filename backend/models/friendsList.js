

const mongoose = require('mongoose');

const friendListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
 
});

const FriendList = mongoose.model('FriendList', friendListSchema);

module.exports = FriendList;
