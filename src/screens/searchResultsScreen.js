import React, {useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify'
import {listPosts} from '../../src/graphql/queries'
import Post from '../components/Post';



const SearchResultsScreen = () => {

  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
       
        const postResult = await API.graphql(
          graphqlOperation(listPosts)
        )
        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPosts();
  }, [])
  return (
    <View>
      <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />} />
    </View>
  )
}

export default SearchResultsScreen;
