const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://ilayda:Huri2001@cluster0.vmmcjew.mongodb.net/?retryWrites=true&w=majority'; 

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


process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB bağlantısı kapatıldı');
    process.exit(0);
  });
});
