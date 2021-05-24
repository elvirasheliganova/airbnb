import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Post = () => {
  return (
    <View style={styles.container}>
     {/*Image*/}

     <Image style={styles.image} source={{
       uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
     }}/>
     
     {/*Bed and Bedroom*/}
     <Text style={styles.bedBedroom}> 1 bed 1 Bedroom</Text>

     {/*Type and Description*/}
     <Text style={styles.description} numberOfLines={2}>Lorem Ipsum is simplyLorem Ipsum is simply dummy text. Lorem Ipsum is simplyLorem Ipsum is simply dummy text</Text>
     

     {/*Prices */}
     <Text style={styles.prices}> 
       <Text style={styles.oldPrice}>$43/night</Text>
       <Text style={styles.price}>  $36/</Text>
         <Text style={styles.nights}>night</Text>
       
     </Text>
     <Text style={styles.totalPrice}>$247 total</Text>
     
     
     </View>
  )
}


const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3/2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedBedroom: {
    fontSize: 16,
    color: '#5b5b5b',
    marginVertical: 10,
  } ,
  description: {
    marginBottom: 15,
    lineHeight: 18
  },
  prices: {
    marginBottom: 15,
  },
  oldPrice: {
  color: '#5b5b5b',
  textDecorationLine: 'line-through',
  },

  price: {
    fontWeight: 'bold',
  },
  totalPrice: {

  },
  
})


export default Post
