import React from 'react';
import { View, Text, FlatList, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, IconButton } from 'react-native-paper';

const users = [
  { id: 1, name: 'Harun', username: 'harun_k', avatar: require('./images/avatar1.png') },
  { id: 2, name: 'Ahmet', username: 'ahmet_34', avatar: require('./images/avatar2.png') },
  { id: 3, name: 'Batuhan', username: 'batuhan77', avatar: require('./images/avatar3.png') },
];

const posts = [
  {
    id: '1',
    userId: 1,
    image: require('./images/post1.png'),
    likes: 10,
    comments: 5,
  },
  {
    id: '2',
    userId: 2,
    image: require('./images/post2.png'),
    likes: 15,
    comments: 7,
  },
  {
    id: '3',
    userId: 3,
    image: require('./images/post3.png'),
    likes: 8,
    comments: 3,
  },
];

const PostPage = ({ navigation }) => {
  const handleFollowUser = (userId) => {
    Alert.alert('Sistem', 'Kullanıcı takip edildi');
    // Kullanıcıyı takip etme işlemleri
    // userId parametresi ile takip edilecek kullanıcının kimliği elde edilebilir
  };

  const renderPostItem = ({ item }) => {
    const user = users.find((user) => user.id === item.userId);

    return (
      <Card key={item.id} style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile', { user })}>
          <Card.Title
            title={user.name}
            left={(props) => <Avatar.Image source={user.avatar} size={40} {...props} />}
            right={(props) => (
              <Button onPress={() => handleFollowUser(item.userId)} mode="outlined" {...props}>
                Takip Et
              </Button>
            )}
          />
        </TouchableOpacity>
        <Card.Cover source={item.image} />

        <Card.Content>
          <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              <IconButton icon="heart" onPress={() => {}} />
              <Text style={styles.iconText}>{item.likes} Beğeni</Text>
            </View>

            <View style={styles.iconWrapper}>
              <IconButton icon="comment" onPress={() => {}} />
              <Text style={styles.iconText}>{item.comments} Yorum</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={posts} renderItem={renderPostItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 4,
  },
});

export default PostPage;
