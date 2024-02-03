import React, {useCallback, useEffect, useState} from 'react';
import {Button, FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default PostData = (props) => {
  const [postData, setPostData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
   
    getPostData();
  }, []);

  //get Post Data
  const getPostData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error(error));
  };

  //Handle Referesh

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    
    setTimeout(() => {
        setIsRefreshing(false);
      }, 1000);
  });

  //handle list data
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.renderItemContainer}>
        <View style={styles.rowView}>
        <Text>UserId:</Text>
        <Text> {item.userId}</Text>
        </View>
        <View style={styles.rowView}>
        <Text>Title:</Text>
        <Text> {item.title}</Text>
        </View>
        <View style={styles.rowView}>
        <Text>Body:</Text>
        <Text> {item.body}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{marginVertical:10}}
        data={postData}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4ffde',
  },
  renderItemContainer: {
    backgroundColor: '#d0fffe',
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
  },
  rowView:{
    flexDirection:'row'
  }
});
