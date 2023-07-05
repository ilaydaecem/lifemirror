import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const ProfilDuzenleme = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleProfilDuzenle = () => {
    
    if (!name || !surname || !birthDate || !gender) {
      setErrorMessage('Lütfen tüm bilgileri doldurun.');
      return;
    }

  

    console.log('Profil düzenleme işlemi gerçekleştirildi:', {
      name,
      surname,
      birthDate,
      gender
    });

    setErrorMessage('');
    setSuccessMessage('Profil düzenleme işlemi başarıyla tamamlandı.');
  };

  return (
    <View>
      {errorMessage !== '' && <Text>{errorMessage}</Text>}
      {successMessage !== '' && <Text>{successMessage}</Text>}
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
        value={birthDate}
        onChangeText={text => setBirthDate(text)}
      />
      <TextInput
        placeholder="Cinsiyet"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <Button title="Profil Düzenle" onPress={handleProfilDuzenle} />
    </View>
  );
};

export default ProfilDuzenleme;
