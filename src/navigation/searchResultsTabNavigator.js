import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/searchResultsScreen';
import SearchResultsMapScreen from '../screens/searchResultsMapScreen';

import { useRoute } from "@react-navigation/native";


const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = (props) => {

  const route = useRoute();
  
  const { guests } = route.params;
  console.log(route.params);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        indicatorStyle: {
          backgroundColor: "#f15454"
        }
      }}>
      <Tab.Screen name="List">
        {() => (
           <SearchResultsScreen guests={guests}  />
        )}
       
      </Tab.Screen>

      <Tab.Screen name="Map">
      {() => (
           <SearchResultsMapScreen guests={guests} />
        )}
      </Tab.Screen>
      
      
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator
