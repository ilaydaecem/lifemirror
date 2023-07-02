import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const KayitOl = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleKayitOl = async () => {
    if (username === '' || password === '' || confirmPassword === '') {
      setErrorMessage('Lütfen tüm bilgileri doldurun.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Şifreler eşleşmiyor.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        username,
        password
      });

      console.log('Kayıt işlemi gerçekleştirildi:', response.data);
      setSuccessMessage('Kayıt işlemi başarıyla tamamlandı.');
    } catch (error) {
      console.error('Kayıt işlemi başarısız:', error);
      setErrorMessage('Kayıt işlemi başarısız. Lütfen tekrar deneyin.');
    }
  };

  return (
    <View>
      {errorMessage !== '' && <Text>{errorMessage}</Text>}
      {successMessage !== '' && <Text>{successMessage}</Text>}
      <TextInput
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        placeholder="Şifre Tekrar"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry
      />
      <Button title="Kayıt Ol" onPress={handleKayitOl} />

      {/* Zaten bir hesabın var mı? Butonu */}
      <TouchableOpacity onPress={() => navigation.navigate('GirisYap')}>
        <Text style={{ color: 'blue', marginTop: 10 }}>Zaten bir hesabın var mı?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KayitOl;
