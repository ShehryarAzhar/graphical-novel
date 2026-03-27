import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {


  return (
    <SafeAreaProvider
    style={{...styles.container}}>
      <SafeAreaView style={{...styles.container}}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
