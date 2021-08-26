import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((post) => post.id === navigation.getParam('id'));

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {blogPost.title} </Text>
      <Text style={styles.text}> {blogPost.content} </Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons style={styles.pencil} name='pencil' />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    margin: 20,
  },

  pencil: {
    fontSize: 40,
    padding: 10,
  },
});

export default ShowScreen;
