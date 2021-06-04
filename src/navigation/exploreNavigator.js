import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/homeScreen'
import SearchResultsScreen from '../screens/searchResultsScreen'

const Stack = createStackNavigator()

const ExploreNavigator = () => {

  
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Welcome"
      component={HomeScreen}
      options={{
        headerShown: false
      }}
        />
          <Stack.Screen 
      name="Search Results"
      component={SearchResultsScreen}
      options={{
        headerShown: false
      }}
        />
    </Stack.Navigator>
    
  )
}

export default ExploreNavigator
