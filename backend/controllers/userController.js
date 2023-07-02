// UserController.js

// Kullanıcı kayıt işlemi
function kayitOl(req, res) {
    // Senaryo UC1
    // 1. Kullanıcı, kayıt olma sayfasına erişir.
    // 2. Kullanıcı, gerekli bilgileri doldurur ve "Kayıt Ol" düğmesine tıklar.
    const kullaniciAdi = req.body.kullaniciAdi;
    const sifre = req.body.sifre;
    // Burada diğer gerekli bilgileri de alabilirsiniz.
  
    // 1-2a: Kullanıcı, kayıt olmak için gerekli olan bilgileri tamamlamadan önce sayfayı terk eder.
    if (!kullaniciAdi || !sifre) {
      return res.status(400).json({ error: "Kullanıcı adı ve şifre zorunludur." });
    }
  
    // Ön Koşul: Kullanıcının aynı giriş bilgileri ile başka bir hesabı yoktur.
  
    // 3. Sistem, kullanıcının bilgilerini doğrular ve bir hesap oluşturur.
    // Bu adımı simüle etmek için burada kullanıcı veritabanına kaydedilebilir.
    // Aşağıda bununla ilgili bir örnek verdim.
  
    // Simüle edilmiş bir veritabanı kullanımı
    const kullanici = {
      id: 1,
      kullaniciAdi: kullaniciAdi,
      sifre: sifre,
      // Diğer kullanıcı bilgileri burada olabilir.
    };
  
    // 4. Sistem kullanıcıya kayıt işleminin başarılı olduğuna dair bir mesaj gösterir.
    return res.status(200).json({ message: "Kayıt işlemi başarılı. Giriş yapabilirsiniz." });
  }
  
  // Kullanıcı giriş işlemi
  function girisYap(req, res) {
    // Senaryo UC2
    // 1. Kullanıcı, giriş yapma sayfasına erişir.
    // 2. Kullanıcı, kullanıcı adı ve şifre gibi gerekli bilgileri girer.
    const kullaniciAdi = req.body.kullaniciAdi;
    const sifre = req.body.sifre;
  
    // Ön Koşul: Kullanıcının bir hesabı olmalıdır ve hesap bilgileri doğru ve geçerli olmalıdır.
  
    // Veritabanında kayıtlı kullanıcıyı arayarak kontrol edebilirsiniz.
    // Bu örnek için yukarıda kaydedilen kullanıcıyı kullanıyorum.
    if (kullanici.kullaniciAdi === kullaniciAdi && kullanici.sifre === sifre) {
      // 3. Sistem, kullanıcının bilgilerini doğrular ve hesap bilgilerinin doğru olduğunu onaylar.
      // 4. Kullanıcı, başarılı bir şekilde oturum açar ve sistem, kullanıcı arayüzüne yönlendirir.
      return res.status(200).json({ message: "Giriş başarılı. Kullanıcı arayüzüne yönlendiriliyorsunuz." });
    } else {
      // 1a: Kullanıcı giriş yapma işlemi sırasında hatalı bir bilgi girer.
      // 2. Sistem kullanıcıyı uyarır ve doğru bilgileri girmesi için yönlendirir.
      return res.status(401).json({ error: "Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyin." });
    }
  }
  