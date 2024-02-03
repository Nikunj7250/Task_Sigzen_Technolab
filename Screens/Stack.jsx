import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import PostData from './PostData';
import AboutUs from './AboutUs';

export default StackNavigation = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
      // screenOptions={{
      //   header: () => {},
      // }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="PostData"
          component={PostData}
          options={({route, navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
                <Text>About Us</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </View>
  );
};
