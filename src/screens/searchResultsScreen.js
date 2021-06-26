import React, {useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify';
import Post from '../components/Post';
import { listPosts } from '../graphql/queries';



const SearchResultsScreen = () => {

  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      
      try {
 
        const postsResult = await API.graphql(
          graphqlOperation(listPosts)
        )
        setPosts(postsResult.data.listPosts.items);

      } catch (e){
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
