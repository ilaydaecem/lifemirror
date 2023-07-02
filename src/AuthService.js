// AuthService.js

// Basit bir kullanıcı veritabanı oluşturuyoruz
const usersDatabase = [
    { id: 1, username: 'ilayda', password: 'sifre1', name: 'Kullanıcı 1' },
    { id: 2, username: 'batuhan', password: 'sifre2', name: 'Kullanıcı 2' },
    { id: 3, username: 'burak', password: 'sifre3', name: 'Kullanıcı 3' },
    // Daha fazla kullanıcı eklemek isterseniz buraya ekleyebilirsiniz
  ];
  
  export const login = async (username, password) => {
    // Kullanıcı veritabanını kontrol ediyoruz
    const user = usersDatabase.find(
      (user) => user.username === username && user.password === password
    );
  
    if (user) {
      return { success: true, user };
    } else {
      return { success: false, message: 'Kullanıcı adı veya şifre yanlış!' };
    }
  };
  