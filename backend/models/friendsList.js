// models/friendList.js

const mongoose = require('mongoose');

const friendListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  // Diğer arkadaş listesi bilgilerini buraya ekleyebilirsiniz
});

const FriendList = mongoose.model('FriendList', friendListSchema);

module.exports = FriendList;
