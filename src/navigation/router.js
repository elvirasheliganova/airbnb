import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/destinationSearchScreen'
import GuestScreen from '../screens/guestScreen'
import HomeTabNavigator from './homeTabNavigator'
import PostScreen from '../screens/postScreen'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen
        name={"Home"}
        component={HomeTabNavigator}
        options={{headerShown: false}}
         />

      <Stack.Screen
        name={"destination"}
        component={DestinationSearchScreen}
        options={{
          title: 'Where are you going?'
        }} />

       <Stack.Screen
        name={"guests"}
        component={GuestScreen}
        options={{
          title: 'How many people?'
        }} />

       <Stack.Screen
        name={"Post"}
        component={PostScreen}
        options={{
          title: 'Accomodation'
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
