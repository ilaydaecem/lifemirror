const Post = require('./models/post'); // Post modelini buraya göre ayarlayın

async function kullaniciPaylasimlariGetir(kullaniciId) {
  try {
    const paylasimlar = await Post.find({ kullanici: kullaniciId }).sort({ tarih: -1 });
    return paylasimlar;
  } catch (error) {
    console.error('Kullanıcının paylaşımlarını alırken hata oluştu:', error);
    return [];
  }
}

async function arkadasPaylasimlariGetir(arkadaslar) {
  try {
    const paylasimlar = await Post.find({ kullanici: { $in: arkadaslar } }).sort({ tarih: -1 });
    return paylasimlar;
  } catch (error) {
    console.error('Arkadaşların paylaşımlarını alırken hata oluştu:', error);
    return [];
  }
}

module.exports = {
  kullaniciPaylasimlariGetir,
  arkadasPaylasimlariGetir
};
