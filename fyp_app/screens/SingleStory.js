import React, { useEffect } from 'react';
import { View, Text,Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

export default function SingleStory() {


  const route = useRoute();
  const { story } = route.params; 

  const updateStory = (story) => {
    story = story.replace(/\n/g, '\n\n');
    return story.replace(/\n\n\n\n/g, '\n\n');
}

const updatePrompt = (prompt) => {
  return prompt.replace(/^Write a /i, '').replace(/^Write an /i, '').replace(/^write /i, '');
}
  

  useEffect(() => {
    axios.get(`https://trusty-locust-teaching.ngrok-free.app/story/${story.id}`)
  }, []);

  return (
    <ScrollView style={{ flex: 1, paddingVertical:25, paddingHorizontal:20, backgroundColor:'#111' }}>
        <Image source={{uri:"https://trusty-locust-teaching.ngrok-free.app"+story.thumbnail}} style={{width:350, height:350, marginVertical: 15, resizeMode:'contain',alignSelf:'center', borderWidth:2, borderColor:'lightgrey',  backgroundColor:'lightgrey'}} />
        <Text style={{fontSize: 17, textAlign:'center', color:'#fff', fontWeight:'bold', marginBottom:10, textTransform:'capitalize'}}>{updatePrompt(story.prompt)}</Text>
        <Text style={{fontSize: 17, textAlign:'justify', color:'#fff', paddingBottom:50}}>{updateStory(story.story)}</Text>
    </ScrollView>
  );
}