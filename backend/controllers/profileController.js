const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;
const uri = "mongodb://localhost:27017"; // MongoDB bağlantı adresi
const client = new MongoClient(uri);

app.use(express.json());

// Kullanıcı profil oluşturma işlemi
async function profilOlustur(req, res) {
  const isim = req.body.isim;
  const soyisim = req.body.soyisim;
  const dogumTarihi = req.body.dogumTarihi;
  const cinsiyet = req.body.cinsiyet;

  if (!isim || !soyisim || !dogumTarihi || !cinsiyet) {
    return res.status(400).json({ error: "Zorunlu alanları doldurunuz." });
  }

  try {
    await client.connect();
    const database = client.db("veritabaniAdi"); // Veritabanı adını buraya yazın
    const koleksiyon = database.collection("profil"); // Koleksiyon adını buraya yazın

    const profil = {
      kullaniciId: 1, // Bu kullanıcının kimlik numarası ya da diğer benzersiz kimliği olabilir.
      isim: isim,
      soyisim: soyisim,
      dogumTarihi: dogumTarihi,
      cinsiyet: cinsiyet,
      // Diğer profil bilgileri burada olabilir.
    };

    await koleksiyon.insertOne(profil);

    return res.status(200).json({ message: "Profil oluşturma başarılı. Profil sayfasına yönlendiriliyorsunuz.", profil: profil });
  } catch (err) {
    console.error("Profil oluşturulurken hata oluştu:", err);
    return res.status(500).json({ error: "Profil oluşturulurken hata oluştu." });
  } finally {
    await client.close();
  }
}

// Kullanıcı profil düzenleme işlemi
async function profilDuzenle(req, res) {
  const kullaniciId = req.body.kullaniciId;

  if (!req.body.isim || !req.body.soyisim || !req.body.dogumTarihi || !req.body.cinsiyet) {
    return res.status(400).json({ error: "Zorunlu alanları doldurunuz." });
  }

  try {
    await client.connect();
    const database = client.db("veritabaniAdi"); // Veritabanı adını buraya yazın
    const koleksiyon = database.collection("profil"); // Koleksiyon adını buraya yazın

    const profil = await koleksiyon.findOne({ kullaniciId: kullaniciId });

    if (!profil) {
      return res.status(404).json({ error: "Profil bulunamadı." });
    }

    profil.isim = req.body.isim;
    profil.soyisim = req.body.soyisim;
    profil.dogumTarihi = req.body.dogumTarihi;
    profil.cinsiyet = req.body.cinsiyet;
    // Diğer profil bilgileri burada güncellenebilir.

    await koleksiyon.updateOne({ kullaniciId: kullaniciId }, { $set: profil });

    return res.status(200).json({ message: "Profil düzenleme başarılı. Profil sayfasına yönlendiriliyorsunuz.", profil: profil });
  } catch (err) {
    console.error("Profil düzenlenirken hata oluştu:", err);
    return res.status(500).json({ error: "Profil düzenlenirken hata oluştu." });
  } finally {
    await client.close();
  }
}

// Sunucuyu başlat
app.post("/profil/olustur", profilOlustur);
app.put("/profil/guncelle", profilDuzenle);

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
