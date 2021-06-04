import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'



const SuggestionRow = ({item}) => {

  
  const navigation = useNavigation()

  return (
    
        <View 
        style={styles.row}
        onPress={() => navigation.navigate("guests")}>
          <View style={styles.iconContainer}>
            <Entypo name="location-pin" size={35} />
          </View>
          <Text style={styles.locationText}>{item.description}</Text>
        </View>
      )
   
 
}
const styles = StyleSheet.create({
  
  
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
export default SuggestionRow