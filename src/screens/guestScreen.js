import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const GuestScreen = () => {

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfantss] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
        <View>
              {/* Row 1: Adults*/}
            <View style={styles.row}>
              {/* Titles*/}
              <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}} >Adults</Text>
                  <Text style={{ fontWeight: '300', color: 'grey'}}>Ages 13 or above</Text>
              </View>

              {/* Counter*/}
              <View style={styles.counter}>
                {/* minusIcon*/}
                <TouchableOpacity 
                style={styles.iconContainer}
                onPress={() => setAdults(Math.max (0, adults - 1))}>
                  <Entypo name="minus" size={16} />
                </TouchableOpacity>
              
                {/* Value*/}
                <View style={{width: 45, height: 25, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 18}}>{adults}</Text>
                </View>
                {/* plusIcon*/}
                <TouchableOpacity 
                style={styles.iconContainer}
                onPress={() => setAdults(adults + 1)}>
                  <Entypo name="plus" size={16} />
                </TouchableOpacity>
              </View> 
              </View>

              {/* Row 2: Children*/}
            <View style={styles.row}>
              {/* Titles*/}
              <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}} >Children</Text>
                  <Text style={{ fontWeight: '300', color: 'grey'}}>Ages 2-12</Text>
              </View>

              {/* Counter*/}
              <View style={styles.counter}>
                {/* minusIcon*/}
                <TouchableOpacity 
                style={styles.iconContainer}
                onPress={() => setChildren(Math.max (0, children - 1))}>
                  <Entypo name="minus" size={16} />
                </TouchableOpacity>
              
                {/* Value*/}
                <View style={{width: 45, height: 25, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 18}}>{children}</Text>
                </View>
                {/* plusIcon*/}
                <TouchableOpacity 
                style={styles.iconContainer}
                onPress={() => setChildren(children + 1)}>
                  <Entypo name="plus" size={16} />
                </TouchableOpacity>
              </View> 
            </View>

              {/* Row 3: Infants*/}
            <View style={styles.row}>
            {/* Titles*/}
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}} >Infants</Text>
                <Text style={{ fontWeight: '300', color: 'grey'}}>Under 2</Text>
            </View>

            {/* Counter*/}
            <View style={styles.counter}>
              {/* minusIcon*/}
              <TouchableOpacity 
              style={styles.iconContainer}
              onPress={() => setInfants(Math.max (0, infants - 1))}>
                <Entypo name="minus" size={16} />
              </TouchableOpacity>
            
              {/* Value*/}
              <View style={{width: 45, height: 25, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 18}}>{infants}</Text>
              </View>
              {/* plusIcon*/}
              <TouchableOpacity 
              style={styles.iconContainer}
              onPress={() => setInfants(ainfants + 1)}>
                <Entypo name="plus" size={16} />
              </TouchableOpacity>
            </View> 
          </View>
        </View>
        <TouchableOpacity 
        style={{
          marginBottom: 20, 
          height: 50, 
          marginHorizontal: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10
        }}
        onPress={() => navigation.navigate('Home', {
          screen: 'Explore',
          params: {
            screen:"Search Results", 
            params: {
              
              guests: adults + children,
              }
        },})}
        >
          
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Search</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'center'
    
  }, 
  iconContainer: {
    width: 30,
    height: 30,
    borderColor: 'grey',

    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'

  }
})

export default GuestScreen
