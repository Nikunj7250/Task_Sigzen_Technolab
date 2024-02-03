import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default AboutUs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        {
          'Hello Users! \n   My name is Nikunj Kathiriya. I am currently living in Ahamdabad and originally belong to Junagadh. \n\n  For past two year, I have gaining valuble expiriance in filed of mobile app development. i am currently employed at Hyperlink Infosystem. Where i have had the oppertunity to work on diverses projects.'
        }
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text:{
    color:'#000',
    fontSize:14,
    fontWeight:'400'
  }
});
