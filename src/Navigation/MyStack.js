import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main/Main';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
  );
};

export default MyStack;