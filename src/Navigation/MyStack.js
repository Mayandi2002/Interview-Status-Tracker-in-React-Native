import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main/Main';
import Set from '../Screens/Set/Set';
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();
{/*const Drawer = createDrawerNavigator();

const DrawerRoute =()=> {
  return(
    
    <Drawer.Navigator>
    <Drawer.Screen name="Homes" component={Home} />
    </Drawer.Navigator>
    
  );
};*/}


const MyStack = () => {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Main" component={Main}
        options={{
          title: 'Candidates List',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="Set" component={Set} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
};

export default MyStack;