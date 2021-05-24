/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/homeScreen';



const App =  () => {
  
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <HomeScreen/>
    </SafeAreaView>
  );
};



export default App;
