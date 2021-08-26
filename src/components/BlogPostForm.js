import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Title</Text>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        value={title}
        style={styles.input}
        placeholder='Title'
      />
      <Text style={styles.text}>Enter Content</Text>
      <TextInput
        onChangeText={(text) => setContent(text)}
        value={content}
        style={styles.input}
        placeholder='Content'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSubmit(title, content)}
      >
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default BlogPostForm;
