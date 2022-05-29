import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main/Main';
import Main2 from '../Screens/Main2/Main2';
//import Set from '../Screens/Dashboard/Dashboard';
import Home from '../Screens/Home/Home';
import CvvView from '../Screens/CvvView/CvvView';
import CvvUpload from '../Screens/CvvUpload/CvvUpload';
import CvvUpdate from '../Screens/CvvUpload/CvvUpdate/CvvUpdate';
import Dashboard from '../Screens/Dashboard/Dashboard';
import RegEmp from '../Screens/RegEmp/RegEmp';
import EmpList from '../Screens/EmpList/EmpList';
import EmpView from '../Screens/EmpView/EmpView';
import JobDesc from '../Screens/JobDesc/JobDesc';

const Drawer = createDrawerNavigator();

const DrawerRoute2 = () => {
  return(
    <Drawer.Navigator initialRouteName='Candidates List'>
    <Drawer.Screen name="Candidates List" component={Main2} />
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
    
  );
};
export default DrawerRoute2;