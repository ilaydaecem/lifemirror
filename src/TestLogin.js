import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { login } from './AuthService';

const TestLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await login(username, password);
      setLoginResult(result);
    } catch (error) {
      console.error('Giriş işlemi başarısız:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
      {loginResult !== null && (
        <Text>
          {loginResult.success ? 'Giriş Başarılı' : `Hata: ${loginResult.message}`}
        </Text>
      )}
    </View>
  );
};

export default TestLogin;
