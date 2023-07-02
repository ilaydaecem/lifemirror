// models/post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  // Diğer paylaşım bilgilerini buraya ekleyebilirsiniz
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
