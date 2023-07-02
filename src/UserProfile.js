import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserProfile = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} resizeMode="cover" />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    color: '#888',
  },
});

export default UserProfile;
