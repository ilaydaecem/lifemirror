import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import axios from 'axios';

const ProfilOlusturma = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');

  const handleProfilOlustur = async () => {
    // Gerekli bilgilerin kontrolü
    if (name === '' || surname === '' || birthdate === '' || gender === '' || profileImage === null) {
      setError('Lütfen tüm bilgileri eksiksiz doldurun ve profil fotoğrafı yükleyin.');
      return;
    }

    // Profil oluşturma işlemi
    try {
      const response = await axios.post('http://localhost:3000/api/createProfile', {
        name,
        surname,
        birthdate,
        gender,
        profileImage
      });

      console.log('Profil oluşturuldu:', response.data);

      // Profil oluşturma işlemi başarılı ise ilgili sayfaya yönlendirme yapılabilir
    } catch (error) {
      console.error('Profil oluşturma hatası:', error);
      setError('Profil oluşturma sırasında bir hata oluştu.');
    }
  };

  const handleImageUpload = () => {
    // Profil fotoğrafı yükleme işlemi
    // Burada uygun bir görsel yükleme mekanizması kullanılmalıdır
    // setProfileImage ile yüklenen görsel, state'e kaydedilir

    // Örnek olarak, profil fotoğrafını seçmek için bir dosya seçme işlemi kullanılıyor
    // Bu kısım gerçek bir dosya seçme mekanizmasıyla değiştirilmelidir

    // Aşağıdaki kod, basit bir örnek olarak yer almaktadır
    // Kullanıcıya seçtiği dosyanın veri URI'si (base64) ile profil fotoğrafını gösterir

    const image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB...';
    setProfileImage(image);
  };

  return (
    <View>
      <Text>{error}</Text>
      <TextInput
        placeholder="İsim"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Soyisim"
        value={surname}
        onChangeText={text => setSurname(text)}
      />
      <TextInput
        placeholder="Doğum Tarihi"
        value={birthdate}
        onChangeText={text => setBirthdate(text)}
      />
      <TextInput
        placeholder="Cinsiyet"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <Button title="Profil Fotoğrafı Yükle" onPress={handleImageUpload} />
      {profileImage && <Image source={{ uri: profileImage }} style={{ width: 100, height: 100 }} />}
      <Button title="Profil Oluştur" onPress={handleProfilOlustur} />
    </View>
  );
};

export default ProfilOlusturma;
