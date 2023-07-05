const Arkadas = require('./models/arkadas'); 

async function arkadasVeritabanindanGetir(arkadasinKullaniciAdi) {
  try {
    const arkadas = await Arkadas.findOne({ kullaniciAdi: arkadasinKullaniciAdi });
    return arkadas;
  } catch (error) {
    console.error('Arkadaşı veritabanından çekerken hata oluştu:', error);
    return null;
  }
}

async function arkadaslikIstegiVeritabaninaKaydet(istekBilgisi) {
  try {
    const yeniIstek = new Arkadas(istekBilgisi);
    await yeniIstek.save();
    console.log('Arkadaşlık isteği başarıyla kaydedildi');
    return true;
  } catch (error) {
    console.error('Arkadaşlık isteği kaydedilirken hata oluştu:', error);
    return false;
  }
}

async function arkadaslikIstekleriVeritabanindanGetir(aliciKullaniciAdi) {
  try {
    const istekler = await Arkadas.find({ alici: aliciKullaniciAdi });
    return istekler;
  } catch (error) {
    console.error('Arkadaşlık istekleri alınırken hata oluştu:', error);
    return [];
  }
}

async function arkadaslikIstegiSil(istekId) {
  try {
    await Arkadas.findByIdAndRemove(istekId);
    console.log('Arkadaşlık isteği başarıyla silindi');
    return true;
  } catch (error) {
    console.error('Arkadaşlık isteği silinirken hata oluştu:', error);
    return false;
  }
}

async function arkadasEkle(kullaniciAdi, arkadasinKullaniciAdi) {
  try {
    await Arkadas.findOneAndUpdate(
      { kullaniciAdi: arkadasinKullaniciAdi, alici: kullaniciAdi },
      { $set: { onaylandi: true } }
    );
    console.log('Arkadaşlık isteği onaylandı ve arkadaş eklendi');
    return true;
  } catch (error) {
    console.error('Arkadaş ekleme işleminde hata oluştu:', error);
    return false;
  }
}

module.exports = {
  arkadasVeritabanindanGetir,
  arkadaslikIstegiVeritabaninaKaydet,
  arkadaslikIstekleriVeritabanindanGetir,
  arkadaslikIstegiSil,
  arkadasEkle
};
