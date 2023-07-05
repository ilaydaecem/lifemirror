
const express = require('express');
const router = express.Router();
const User = require('./user.model');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
   
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu kullanıcı adı zaten kullanılıyor.' });
    }

    
    const newUser = new User({ username, password });

    
    await newUser.save();

    
    return res.status(201).json({ message: 'Kayıt işlemi başarıyla tamamlandı.' });
  } catch (error) {
    console.error('Kayıt işlemi başarısız:', error);
    return res.status(500).json({ message: 'Kayıt işlemi başarısız. Lütfen tekrar deneyin.' });
  }
});

module.exports = router;
