import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from "../../helpers/context";
import * as Font from 'expo-font';

const RegisterScreen = ({ navigation }) => {
  const { authSuccessful, logoutSuccessful } = useContext(AppContext);

  const LogoImage = require('../../assets/logo.png');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Canavar': require('../../assets/fonts/CANAVAR.ttf'),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  async function storeUserSession(value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user_token', jsonValue);
    } catch (error) {
      console.log(error);
    }
  }

  const register = () => {
    axios.post('https://trusty-locust-teaching.ngrok-free.app/api/register', {
      name: name,
      email: email,
      password: password,
      c_password: confirmPassword,
    })
      .then(async function ({ data }) {
        if (data.success && data.data.error) {
          Alert.alert('Error', 'Invalid credentials. Please try again.');
        } else {
          console.log(data);
          await storeUserSession(data.data.token);
          authSuccessful();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  if (!fontsLoaded) {
    return null; // Alternatively, you can return a loading spinner here
  }

  return (
    <LinearGradient
      colors={['#232526', '#414345']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={styles.projectName}>PROJECT BANDERSNATCH</Text>
        <View style={styles.loginBox}>
        <Text style={styles.heading}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#ccc"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity  onPress={register}>
              <View style={[styles.bottomTextContainer, {backgroundColor:'#fff',marginHorizontal:50, padding:10, borderRadius:50}]}>
              <Text style={[styles.bottomText, {color:'#000'}]}>Register</Text>
              </View>
            </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity> */}
          <View style={styles.bottomTextContainer}>
            <Text style={[styles.bottomText,{fontSize:11, marginTop:15}]}>Already Have An Account</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.bottomTextContainer}>
              <Text style={[styles.bottomText, {fontSize:11, color:'blue'}]}>Sign In </Text>
              </View>
            </TouchableOpacity>

        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    marginBottom: 20,
    color: '#fff',
    fontFamily: 'Canavar',
    textAlign: 'center',
  },
  projectName: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Canavar',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 2,
    textAlign: 'center',
  },
  loginBox: {
    width: '90%',
    padding: 20,
    backgroundColor: '#101010',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontFamily: 'Canavar',
  },
  button: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    fontFamily: 'Canavar',
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Canavar',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  bottomText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Canavar',
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    fontFamily: 'Canavar',
  },
});

export default RegisterScreen;
