import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StoryItem = ({ story }) => {

  const navigation = useNavigation();

  const singleStoryNavigate = () => {
    navigation.navigate('SingleStory', { story });
  }

  const updatePrompt = (prompt) => {
    return prompt.replace(/^Write a /i, '').replace(/^Write an /i, '').replace(/^write /i, '');
  }

  return(
    <TouchableOpacity onPress={singleStoryNavigate} style={{marginBottom:15}}>
      <View style={styles.item}>
          <Image source={{ uri: 'https://trusty-locust-teaching.ngrok-free.app'+story.thumbnail }} style={styles.thumbnail} />
          <View style={styles.textContainer}>
            <Text style={styles.prompt}>{updatePrompt(story.prompt)}</Text>
            <Text style={styles.readStory}>Read Story ></Text>
            <Text style={styles.reads}>{story.reads} reads</Text>
          </View>
      </View>
    </TouchableOpacity>
  )

};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:'#fff',
    borderRadius:15,

  },
  thumbnail: {
    width: 75,
    height: 75,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  prompt: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform:'capitalize'
  },
  readStory: {
    fontSize: 14,
  },
  reads: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
});

export default StoryItem;
