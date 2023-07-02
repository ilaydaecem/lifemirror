const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MongoDB bağlantısı için connection string ve bağlantı kodları
const connectionString = 'mongodb://localhost:27017/lifemirrordatabase';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Express uygulamasını belirlediğiniz portta dinlemeye başlayın
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Gereksinimlere özgü route dosyalarını dahil edin
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const createProfileRouter = require('./routes/createProfile');
const editProfileRouter = require('./routes/editProfile');
const createFriendsListRouter = require('./routes/createFriendsList');
const viewPostsRouter = require('./routes/viewPosts');

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/create-profile', createProfileRouter);
app.use('/edit-profile', editProfileRouter);
app.use('/create-friends-list', createFriendsListRouter);
app.use('/view-posts', viewPostsRouter);
