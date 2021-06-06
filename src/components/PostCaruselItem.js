import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'

const PostCaruselItem = (props) => {
  
  const post = props.post;
  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
     {/*Image*/}

        <Image style={styles.image} source={{
          uri: post.image
        }}/>
        <View style={{flex: 1,marginHorizontal: 10}}>
        {/*Bed and Bedroom*/}
          <Text style={styles.bedBedroom}> {post.bed} bed {post.bedroom} Bedroom</Text>

          {/*Type and Description*/}
          
          <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>
          

          {/*Prices */}
          <Text style={styles.prices}> 
            
            <Text style={styles.price}>  ${post.newPrice}/</Text>
              <Text style={styles.nights}>night</Text>
            
          </Text>
          
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 140,
    padding: 10,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
   
    
  },
  innerContainer: {
    flexDirection:'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    aspectRatio: 1/1,
    resizeMode: 'cover',
   
  },
  bedBedroom: {
    fontSize: 12,
    color: '#5b5b5b',
    marginVertical: 10,
  } ,
  description: {
    marginBottom: 15,
    fontSize: 14
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


export default PostCaruselItem
