import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import KayitOl from './src/KayitOl';
import TestLogin from './src/TestLogin'; 
import ProfilOlusturma from './src/ProfilOlusturma';
import ProfilDuzenleme from './src/ProfilDuzenleme';
import ArkadasListesi from './src/ArkadasListesi';
import PaylasimlariGoruntule from './src/PaylasimlariGoruntule';
import PostPage from './src/PostPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  const handleKayitOl = (userData) => {
    
    setUser(userData);
  };

  const handleGirisYap = (userData) => {
    
    setUser(userData);
  };

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{ title: 'Profil' }}
          />
          <Tab.Screen
            name="ArkadasListesi"
            component={ArkadasListesi}
            options={{ title: 'Arkadaş Listesi' }}
          />
          <Tab.Screen
            name="PaylasimlariGoruntule"
            component={PaylasimlariGoruntule}
            options={{ title: 'Paylaşımları Görüntüle' }}
          />
          
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="KayitOl"
            component={KayitOl}
            options={{ title: 'Kayıt Ol' }}
          />
          <Stack.Screen
            name="GirisYap"
            component={TestLogin} 
            options={{ title: 'Giriş Yap' }}
          />
          <Stack.Screen
            name="PostPage"
            component={PostPage}
            options={{ title: 'Post Page' }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
