// PaylasimlariGoruntule.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PaylasimlariGoruntule = ({ users }) => {
  const samplePosts = [
    { id: 1, userId: 1, content: 'Bu bir örnek paylaşım 1', image: require('./images/post1.png') },
    { id: 2, userId: 2, content: 'Bu bir örnek paylaşım 2', image: require('./images/post2.png') },
    { id: 3, userId: 3, content: 'Bu bir örnek paylaşım 3', image: require('./images/post3.png') },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(samplePosts);
  }, []);

  const renderPostItem = ({ item }) => {
    // Paylaşımı yapan kullanıcı bilgisini buluyoruz
    const user = users.find((u) => u.id === item.userId);

    return (
      <TouchableOpacity style={styles.postItem}>
        <Image source={item.image} style={styles.postImage} resizeMode="cover" />
        <View style={styles.postContentContainer}>
          <Text style={styles.postContent}>{item.content}</Text>
          {/* Kullanıcı adını ve ismini burada gösteriyoruz */}
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userUsername}>@{user.username}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={posts} renderItem={renderPostItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  postContentContainer: {
    padding: 16,
  },
  postContent: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  userUsername: {
    fontSize: 12,
    color: '#666',
  },
});

export default PaylasimlariGoruntule;
