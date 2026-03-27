import React, {useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./MainNavigator";
import axios from 'axios';

import WaitingScreen from "../screens/WaitingScreen";
import AuthNavigator from "../screens/Auth/AuthNavigator";
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from "../screens/Auth/LoginScreen";

import AppContext from "../helpers/context";
import { Text } from "react-native";

const AppNavigator = (props) => {
  
  const [isAuth, setIsAuth] = useState(null);
  const [story, setStory] = useState(null);
  const [user, setUser] = useState(null);

  async function retrieveUserSession() {
      try {   
        const jsonValue = await AsyncStorage.getItem('user_token');
        const token = jsonValue != null ? JSON.parse(jsonValue) : null;


        if (token) {
          console.log('request sent')
          console.log(token)
          // Send the token to Laravel backend for verification
          axios.get('https://trusty-locust-teaching.ngrok-free.app/api/user', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then(response => {
              console.log(response.data)
              if (response.data.authorized) {
                setIsAuth(true);
                setUser(response.data.user);
                if (response.data.token) {
                  AsyncStorage.setItem('user_token', JSON.stringify(response.data.token));
                }
              } else {
                setIsAuth(false);
              }
            })
            .catch(error => {
              console.log('Error verifying token:', error);
              setIsAuth(false);
            });
        } else {
          setIsAuth(false);
        }


        if (value !== undefined && value != null) {
          setIsAuth(true);
        }
        else{
          setIsAuth(false);
        }
    } catch (error) {
    }
  }

  useEffect(()=>{
    retrieveUserSession();
  },[])

  const authSuccessful = () =>{
    setIsAuth(true);
  }

  const logoutSuccessful = async () =>{
    await AsyncStorage.removeItem('user_token')
    setIsAuth(false);
  }

  return (
    <AppContext.Provider value={{authSuccessful, logoutSuccessful, story, setStory}}>
      <NavigationContainer>
          {isAuth == null && <WaitingScreen />}
          {isAuth && <MainNavigator />}
          {!isAuth && isAuth != null && <AuthNavigator />}
      </NavigationContainer>
    </AppContext.Provider>
  );

  
};

export default AppNavigator;