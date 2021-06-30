import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import searchResults from "../../assets/data/search"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import SuggestionRow from '../components/suggestionRow'


const DestinationSearchScreen = () => {

  
  const navigation = useNavigation()
 

  return (
    <View style={styles.root}>
      <View style={{height: 350}}>
        <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('guests')
        }}
        query={{
          key: 'AIzaSyBYdBZXcjFBhbES8OyjxX0x3AZuUB8xDHk',
          language: 'en',
          types: '(cities)'
        }}
        style={{
          textInput: styles.textInput
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />} 
      />
    </View>
     

    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white'

  },
  textInput: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 60,

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    marginRight: 10,
  },
  locationText: {

  }

})


export default DestinationSearchScreen
