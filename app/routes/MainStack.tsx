import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home/Home';
import {ScreenNames} from './ScreenNames';
import CreatePost from '../screens/createPost/CreatePost';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.Home}>
        <Stack.Screen
          name={ScreenNames.Home}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.CreatePost}
          component={CreatePost}
          options={{headerTitle: 'Create Post'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
