

// Kullanıcı kayıt işlemi
function kayitOl(req, res) {

    const kullaniciAdi = req.body.kullaniciAdi;
    const sifre = req.body.sifre;
   
    if (!kullaniciAdi || !sifre) {
      return res.status(400).json({ error: "Kullanıcı adı ve şifre zorunludur." });
    }
  
   
    const kullanici = {
      id: 1,
      kullaniciAdi: kullaniciAdi,
      sifre: sifre,
      
    };
  
    
    return res.status(200).json({ message: "Kayıt işlemi başarılı. Giriş yapabilirsiniz." });
  }
  
  // Kullanıcı giriş işlemi
  function girisYap(req, res) {
   
    const kullaniciAdi = req.body.kullaniciAdi;
    const sifre = req.body.sifre;
  
   
    if (kullanici.kullaniciAdi === kullaniciAdi && kullanici.sifre === sifre) {
    
      return res.status(200).json({ message: "Giriş başarılı. Kullanıcı arayüzüne yönlendiriliyorsunuz." });
    } else {
      
      return res.status(401).json({ error: "Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyin." });
    }
  }
  