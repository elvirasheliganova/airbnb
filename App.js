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
import Post from './src/components/Post';



const App =  () => {
  
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <Post/>
    </SafeAreaView>
  );
};



export default App;
