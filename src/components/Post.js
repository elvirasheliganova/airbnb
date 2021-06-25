import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {  useNavigation } from '@react-navigation/native'

const days = 7;

const Post = (props) => {
  
  const post = props.post;

  const navigation = useNavigation()
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id})
  }
  return (
    <TouchableOpacity 
    onPress={goToPostPage}
    style={styles.container}>
     {/*Image*/}

     <Image style={styles.image} source={{
       uri: post.image
     }}/>
     
     {/*Bed and Bedroom*/}
     <Text style={styles.bedBedroom}> {post.bed} bed {post.bedroom} Bedroom</Text>

     {/*Type and Description*/}
     
     <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>
     

     {/*Prices */}
     <Text style={styles.prices}> 
       <Text style={styles.oldPrice}>${post.oldPrice}/night</Text>
       <Text style={styles.price}>  ${post.newPrice}/</Text>
         <Text style={styles.nights}>night</Text>
       
     </Text>
     <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
     
     
     </TouchableOpacity>
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
    lineHeight: 18,
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
