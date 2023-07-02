import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KayitOl from './src/KayitOl';
import TestLogin from './src/TestLogin'; // Değişiklik burada
import ProfilOlusturma from './src/ProfilOlusturma';
import ProfilDuzenleme from './src/ProfilDuzenleme';
import ArkadasListesi from './src/ArkadasListesi';
import PaylasimlariGoruntule from './src/PaylasimlariGoruntule';


const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  const handleKayitOl = (userData) => {
    // Kayıt işlemi tamamlandığında kullanıcı verisini ayarlayın
    setUser(userData);
  };

  const handleGirisYap = (userData) => {
    // Giriş işlemi tamamlandığında kullanıcı verisini ayarlayın
    setUser(userData);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="ProfilOlusturma"
              component={ProfilOlusturma}
              options={{ title: 'Profil Oluşturma' }}
            />
            <Stack.Screen
              name="ProfilDuzenleme"
              component={ProfilDuzenleme}
              options={{ title: 'Profil Düzenleme' }}
            />
            <Stack.Screen
              name="ArkadasListesi"
              component={ArkadasListesi}
              options={{ title: 'Arkadaş Listesi' }}
            />
            <Stack.Screen
              name="PaylasimlariGoruntule"
              component={PaylasimlariGoruntule}
              options={{ title: 'Paylaşımları Görüntüle' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="KayitOl"
              component={KayitOl}
              options={{ title: 'Kayıt Ol' }}
            />
            <Stack.Screen
              name="GirisYap"
              component={TestLogin} // Değişiklik burada
              options={{ title: 'Giriş Yap' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
