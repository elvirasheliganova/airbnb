import { Auth } from 'aws-amplify'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ProfileScreen = () => {

  const logout = () => {
    Auth.signOut();
  }
  return (
    <View 
    style={{
      height: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'}}>
      <TouchableOpacity 
      style={{
        width: '80%',
        height: 40,
        backgroundColor: '#c3c3c3',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={logout} >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen
