import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default Home = (props) => {
  return (
    <View style={styles.continer}>
      <Text>Explore Our Post</Text>
      <TouchableOpacity style = {styles.btn} onPress={()=> props.navigation.navigate('PostData')}>
        <Text style={styles.btn_text}>Explore Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    backgroundColor:'#000',
    borderRadius:5,
    padding:10,
    marginVertical:20,
  },
  btn_text:{
    textAlignVertical:'center',
    color:'#fff'
  }
});
