import React, {useState, useEffect, useRef} from 'react'
import { View, useWindowDimensions } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import CustomMarker from '../components/CustomMarker'



import PostCaruselItem from '../components/PostCaruselItem'
import { FlatList } from 'react-native-gesture-handler'
import { API, graphqlOperation } from 'aws-amplify'
import {listPosts} from '../../src/graphql/queries'



const SearchResultsMapScreen = (props) => {


  const {guests}  = props;

  const[selectedPlaceId, setSelectedPlaceId] = useState(null)
  const [posts, setPosts] = useState([]);

  const flatListRef =  useRef()

  const map = useRef()

  const viewConfig = useRef({itemVisiblePercentThreshold: 70})

  const onViewChanged = useRef(({viewableItems}) => {

    const selectedPlace = viewableItems[0].item
    setSelectedPlaceId(selectedPlace.id)
  })

  const width = useWindowDimensions().width

  useEffect(() => {
    const fetchPosts = async () => {
      try {
       
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              maxGuests: {
                ge: guests
              }
            }
          })
        )
        setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPosts();
  })

  useEffect (() => {
      if(!selectedPlaceId || !flatListRef) {
        return;
      }
        const index = posts.findIndex(place => place.id === selectedPlaceId)

        flatListRef.current.scrollToIndex({index})

        const selectedPlace = posts[index]
        const region = {
          latitude: selectedPlace.latitude,
          longitude: selectedPlace.longitude,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8
        }
        map.current.animateToRegion(region)
    }, [selectedPlaceId])

  return (
    <View style={{ width: '100%', height: '100%'}}>
       <MapView 
       ref={map}
       style={{ width: '100%', height: '100%'}}
       provider={PROVIDER_GOOGLE}
       initialRegion={{
      latitude: 28.3279822,
      longitude: -16.5124847,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }}>
       {posts.map(place => (
       <CustomMarker 
       coordinate={{latitude: place.latitude, longitude: place.longitude}} 
       price={place.newPrice}
       isSelected={place.id === selectedPlaceId}
       onPress={() => setSelectedPlaceId(place.id)} />))}
    </MapView>
    <View style={{position: 'absolute', bottom: 40}}>
      <FlatList
      ref={flatListRef}
      data={posts}
      renderItem={({item}) => (
        <PostCaruselItem post={item} />
      )} 
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width - 60}
      snapToAlignment={'center'}
      decelerationRate={'fast'}
      viewabilityConfig={viewConfig.current}
      onViewableItemsChanged={onViewChanged.current}
      />
    </View>

     
    </View>
  )
}

export default SearchResultsMapScreen
