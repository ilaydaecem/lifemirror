import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const GirisYap = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGirisYap = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });

      console.log('Oturum açma başarılı:', response.data);
      
      navigation.navigate('PostPage');
    } catch (error) {
      console.error('Oturum açma başarısız:', error);
      setError('Kullanıcı adı veya şifre hatalı');
    }
  };

  return (
    <View style={styles.container}>
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Giriş Yap" onPress={handleGirisYap} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
});

export default GirisYap;
