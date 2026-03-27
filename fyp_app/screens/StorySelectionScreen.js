import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import CreateStoryScreen from "./CreateStoryScreen";
import QuickStartScreen from "./QuickStartScreen";
import StoryScreen from "./StoryScreen";
import StoryScreenStatic from "./StoryScreenStatic";
import AllStoriesScreen from "./AllStoriesScreen";
import SingleStory from "./SingleStory";

// Import images
const quickStartImage = require('../assets/quickstory.png');
const createStoryImage = require('../assets/createstory.png');
const closeImage = require('../assets/close.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="HomeMain" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={AllStoriesScreen} />
    <Stack.Screen name="CreateStoryScreen" component={CreateStoryScreen} />
    <Stack.Screen name="QuickStartScreen" component={QuickStartScreen} />
    <Stack.Screen name="StoryScreen" component={StoryScreen} />
    <Stack.Screen name="StoryScreenStatic" component={StoryScreenStatic} />
    <Stack.Screen name="SingleStory" component={SingleStory} />
  </Stack.Navigator>
);

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.playText}>Press Play Button in the Tab</Text>
    </View>
  );
};

const OptionsScreen = () => (
  <View style={styles.container}>
    <Text style={{ color: '#fff' }}>Options Screen</Text>
  </View>
);

const StorySelectionScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Play') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
            } else if (route.name === 'Options') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen
          name="Play"
          component={PlayScreen}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => showModal()}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
              >
                <Icon name="play" size={30} color={'green'} />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen name="Options" component={OptionsScreen} />
      </Tab.Navigator>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.fullWidthButton} onPress={() => { hideModal(); navigation.navigate('QuickStartScreen'); }}>
              <ImageBackground source={quickStartImage} style={styles.bgImage}>
                <Text style={styles.modalText}>Quick Start with Genre</Text>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.halfWidthContainer}>
              <TouchableOpacity style={styles.halfWidthButton} onPress={() => { hideModal(); navigation.navigate('CreateStoryScreen'); }}>
                <ImageBackground source={createStoryImage} style={styles.bgImage}>
                  <Text style={styles.modalText}>Create Your Own Story</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.halfWidthButton} onPress={hideModal}>
                <ImageBackground source={closeImage} style={styles.bgImage}>
                  <Text style={styles.modalText}>Close</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceBtns: {
    paddingVertical: 18,
    paddingHorizontal: 35,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  choiceBtnsText: {
    fontSize: 18,
  },
  playText: {
    fontSize: 18,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    height: '50%',
  },
  fullWidthButton: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  halfWidthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidthButton: {
    width: '48%',
    height: 150,
    marginHorizontal: 8,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StorySelectionScreen;

{/* 
<TouchableOpacity onPress={() => navigation.navigate('AllStoriesScreen')} style={styles.choiceBtns}>
<Text style={styles.choiceBtnsText}>
    All Stories
</Text>
</TouchableOpacity> */}