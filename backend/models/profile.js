// models/profile.js

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  bio: { type: String },
  profileImage: { type: String },
  // Diğer profil bilgilerini buraya ekleyebilirsiniz
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
