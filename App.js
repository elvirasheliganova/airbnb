/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/navigation/router'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';










const App =  () => {

  
   
  return (
    
    <>
      <StatusBar barStyle='dark-content' />
      <Router />
    </>  
    
      
  );
};



export default App;
