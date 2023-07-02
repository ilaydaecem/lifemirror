import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ArkadasListesi = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Backend API'sine istek göndermek için kullanılacak fonksiyon
    const fetchFriends = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/friends');
        setFriends(response.data);
      } catch (error) {
        console.error('Arkadaşları alma hatası:', error);
      }
    };

    fetchFriends();
  }, []);

  const renderFriendItem = ({ item }) => (
    <TouchableOpacity style={styles.friendItem}>
      <Image source={{ uri: item.avatar }} style={styles.friendAvatar} resizeMode="cover" />
      <View style={styles.friendDetails}>
        <Text style={styles.friendName}>{item.name}</Text>
        {/* Ekstra bilgileri buraya ekleyebilirsiniz */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={renderFriendItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  friendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendDetails: {
    marginLeft: 16,
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ArkadasListesi;
