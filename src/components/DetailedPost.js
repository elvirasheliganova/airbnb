import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'

const DetailedPost = (props) => {
  
  const post = props.post;
  return (
    <View style={styles.container}>
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
       
       <Text style={styles.price}>  ${post.newPrice}/</Text>
         <Text style={styles.nights}>night</Text>
       
     </Text>
     <SafeAreaView style={styles.descriptionContainer}>
     <ScrollView 
     showsVerticalScrollIndicator={false}>
     <Text style={styles.longDescription}>{post.description}</Text>
     </ScrollView>
     </SafeAreaView>
     
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
    fontSize: 16,
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
  descriptionContainer: {
    height: 350
  },
  
  longDescription: {

    fontSize: 16,
    lineHeight: 24,
  },
  
})


export default DetailedPost
