import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/searchResultsScreen';
import SearchResultsMapScreen from '../screens/searchResultsMapScreen';


const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        indicatorStyle: {
          backgroundColor: "#f15454"
        }
      }}>
      <Tab.Screen 
      name="List"
      component={SearchResultsScreen}
      />

<Tab.Screen 
      name="Map"
      component={SearchResultsMapScreen}
      />
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator
