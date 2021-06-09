import React, {useState, useEffect, useRef} from 'react'
import { View, useWindowDimensions } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import CustomMarker from '../components/CustomMarker'

import places from '../../assets/data/feed'
import PostCaruselItem from '../components/PostCaruselItem'
import { FlatList } from 'react-native-gesture-handler'
import feed from '../../assets/data/feed';

const SearchResultsMapScreen = (props) => {

  const[selectedPlaceId, setSelectedPlaceId] = useState(null)

  const flatListRef =  useRef()

  const map = useRef()

  const viewConfig = useRef({itemVisiblePercentThreshold: 70})

  const onViewChanged = useRef(({viewableItems}) => {

    const selectedPlace = {viewableItems}[0].item
    setSelectedPlaceId(selectedPlace.id)
  })

  const width = useWindowDimensions().width

  useEffect (() => {
      if(!selectedPlaceId || !flatListRef) {
        return;
      }
        const index = places.findIndex(place => place.id === selectedPlaceId)

        flatListRef.current.scrollToIndex({index})

        const selectedPlace = places[index]
        const region = {
          latitude: selectedPlace.coordinate.latitude,
          longitude: selectedPlace.coordinate.longitude,
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
       { places.map(place => 
       <CustomMarker 
       coordinate={place.coordinate} 
       price={place.newPrice}
       isSelected={place.id === selectedPlaceId}
       onPress={() => setSelectedPlaceId(place.id)} />)}
    </MapView>
    <View style={{position: 'absolute', bottom: 40}}>
      <FlatList
      ref={flatListRef}
      data={feed}
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
