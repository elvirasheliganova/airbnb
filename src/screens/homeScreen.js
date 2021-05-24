import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {

  

  return (
    <View>

      {/* SearchBar*/}
      <TouchableOpacity style={styles.searchButton} onPress={() => console.warn('Search Button Pressed')}>
          <Fontisto name='search' size={24} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </TouchableOpacity>

      <ImageBackground source={require('../../assets/images/wallpaper.jpg')} style={styles.image} >
      {/* Title*/}
        <Text style={styles.title}>Go Near </Text>

      {/* Button*/}

        <TouchableOpacity style={styles.button} onPress={() => console.warn('Pressed')}>
          <Text style={styles.text}>Explore nearby stays</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    
    width: '100%',
    height: 500,
    justifyContent: 'center',
   resizeMode: 'cover',
},
title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    width: '70%',
    marginLeft: 20,
    lineHeight: 85
}, 

button: {
  width: 200,
  backgroundColor: '#fff',
  borderRadius: 10,
  height: 40,
  marginLeft: 20,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
text:{
  fontSize: 16,
  fontWeight: '500',
},
searchButton: {
  backgroundColor: '#fff',
  borderRadius: 25,
  width: Dimensions.get('window').width - 20,
  height: 50,
  position: 'absolute',
  top: 20,
  paddingHorizontal: 96,
  zIndex: 100,
  alignSelf: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  
},
searchButtonText: {
  
  fontWeight: '500',
}
})

export default HomeScreen
