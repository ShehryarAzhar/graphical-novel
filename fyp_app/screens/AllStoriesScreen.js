import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native'; // Import useIsFocused hook
import axios from 'axios';
import StoryItem from './StoryItem'; // Assuming the StoryItem component is in the same directory

export default function AllStoriesScreen() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFocused = useIsFocused(); // Use useIsFocused hook

  const fetchStories = () => {
    console.log('request sent');
    axios.get('https://trusty-locust-teaching.ngrok-free.app/stories')
      .then(response => {
        console.log(response);
        setStories(response.data.stories);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isFocused) {
      fetchStories();
    }
  }, [isFocused]); // Call fetchStories whenever isFocused changes

  if (loading) {
    return (
      <View style={styles.container}>
            <ActivityIndicator color="#fff" size={52}/>
      </View>
    );
  }


  return (
    <View style={styles.container}>
        <Text style={{color:'#fff', fontSize:20, fontWeight:'bold', marginVertical:20, textAlign:'center'}}>
            Stories By Community
        </Text>
        <FlatList
            data={stories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <StoryItem story={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#222',
  },
});
