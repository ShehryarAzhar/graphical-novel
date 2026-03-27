import React from "react";
import { View, Text, Image } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from "../screens/MainScreen";
import StorySelectionScreen from "../screens/StorySelectionScreen";

const Stack = createNativeStackNavigator();

const TestingScreen = () =>{
    return(
        <View>
            <Image source={{uri:`https://trusty-locust-teaching.ngrok-free.app/generated_images/6632b6c1a4bd4.jpg`}} style={{width:350, height:350, marginBottom: 15, resizeMode:'contain'}} />
        </View>
    )
}

const MainNavigator = () => {
    return ( 
        <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="StorySelection" component={StorySelectionScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="TestingScreen" component={TestingScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}
 
export default MainNavigator;