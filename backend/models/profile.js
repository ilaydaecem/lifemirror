

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  bio: { type: String },
  profileImage: { type: String },

});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
