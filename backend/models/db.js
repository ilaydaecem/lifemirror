const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/lifemirrordatabase'; // Veritabanı URL'nizi buraya yazın

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('MongoDB\'ye bağlandı');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB bağlantı hatası:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB bağlantısı kesildi');
});

// Uygulama kapatılırken MongoDB bağlantısını kapatmak için aşağıdaki kodu ekleyin
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB bağlantısı kapatıldı');
    process.exit(0);
  });
});
