import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import searchResults from "../../assets/data/search"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import SuggestionRow from '../components/suggestionRow'
import CategoryStaysItem from '../components/CategoryStaysItem'
import TopStaysCard from '../components/TopStaysCard'


const DestinationSearchScreen = () => {

  
  const navigation = useNavigation()
 

  return (
    <View style={styles.root}>
     
      <View style={styles.search}>
         
         <Text style={styles.searchTitle}>Where do {'\n'}you want to stay?</Text> 
         
         <View style={styles.categoryBox}>
            <CategoryStaysItem 
            type='villa'
            icon='house'
            />
            
            <CategoryStaysItem 
            type='apartment'
            image={require('../../assets/images/wallpaper.jpg')}
            icon='apartment'
            />
            <CategoryStaysItem 
            type='hotel'
            image={require('../../assets/images/wallpaper.jpg')}
            icon='hotel'
            />
          </View>
        
          <View style={styles.searchBox}>
            <GooglePlacesAutocomplete
            placeholder='Search for accomodations...'
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
        <View>
          <Text style={styles.staysTitle}>Top stays</Text>
          <View style={styles.staysBox}>
            <TopStaysCard
            
            description='Angiolina'
            type='Villa' 
            icon='heart-outline'/>
            <TopStaysCard
            image={require('../../assets/images/wallpaper.jpg')}
            description='Mary Garden'
            type='Apartment' 
            icon='heart-outline'/>
          </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    marginLeft: 20,
    height: '100%',
    

  },

  categoryBox: {
    flexDirection: 'row',
    
    marginTop: 20,
  },
  searchBox: {
    margin: 30,
    marginLeft: 0,
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  textInput: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 60,
    color: '#102a27',
    
    

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

  }, 
  search: {
    marginTop: 60,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
  },
  searchTitle: {
    color: '#102a27',
   
    fontSize: 30,
    fontWeight: 'bold',
   
  },
  staysBox: {
    flexDirection: 'row',
  },
  staysTitle: {
    color: '#102a27',
    fontSize: 20,
    fontWeight: 'bold',
  }

})


export default DestinationSearchScreen
