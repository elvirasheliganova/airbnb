import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import searchResults from "../../assets/data/search"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'


const DestinationSearchScreen = () => {

  const [inputText, setInputText] = useState('');
  const navigation = useNavigation()

  return (
    <View style={styles.root}>
      {/* Input compoinent */}
      <TextInput 
        style={styles.textIput}
        placeholder="Where are you going?"
        value={inputText}
        onChange={setInputText}
      />
      <FlatList 
      data={searchResults}
      renderItem={({item}) => (
        <TouchableOpacity 
        style={styles.row}
        onPress={() => navigation.navigate("guests")}>
          <View style={styles.iconContainer}>
            <Entypo name="location-pin" size={35} />
          </View>
          <Text style={styles.locationText}>{item.description}</Text>
        </TouchableOpacity>
      )}
      />


      {/* List of Destinations */}

    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    margin: 20
  },
  textInput: {
    fontSize: 24,
    marginBottom: 20,

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
