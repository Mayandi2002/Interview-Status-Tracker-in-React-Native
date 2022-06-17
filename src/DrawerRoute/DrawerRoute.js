import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Main from '../Screens/Main/Main';
import Home from '../Screens/Home/Home';
import Dashboard from '../Screens/Dashboard/Dashboard';
import RegEmp from '../Screens/RegEmp/RegEmp';
import EmpList from '../Screens/EmpList/EmpList';
import JobDesc from '../Screens/JobDesc/JobDesc';

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return(
    <Drawer.Navigator initialRouteName='Candidates List'>
    <Drawer.Screen name="Candidates List" component={Main} 
      options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
              name="people"
              size={size}
              color={focused ? 'blue' : 'black'} />),}} />
    <Drawer.Screen name="Dashboard" component={Dashboard} 
      options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
              name="dashboard"
              size={size}
              color={focused ? 'blue' : 'black'} />),}} />
    <Drawer.Screen name="Employee List" component={EmpList}
      options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
              name="list-alt"
              size={size}
              color={focused ? 'blue' : 'black'} />),}} />
    <Drawer.Screen name="Add Job" component={JobDesc}
      options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
              name="post-add"
              size={size}
              color={focused ? 'blue' : 'black'} />),}} />
    <Drawer.Screen name="Settings" component={Home}
      options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
              name="settings"
              size={size}
              color={focused ? 'blue' : 'black'} />),}} />
    </Drawer.Navigator>    
  );
};
export default DrawerRoute;