import axios from 'axios';
import siteUrl from './siteUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: siteUrl,
  responseType: 'json'
});

// Add a request interceptor to include the token in the header
api.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(await AsyncStorage.getItem('my-key'));
    if (token && token != null) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;