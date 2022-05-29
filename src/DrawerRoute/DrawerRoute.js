import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main/Main';
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

const DrawerRoute = () => {
  return(
    <Drawer.Navigator initialRouteName='Candidates List'>
    <Drawer.Screen name="Candidates List" component={Main} />
    <Drawer.Screen name="Add Candidate" component={CvvUpload} />
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Create Employee" component={RegEmp} />
    <Drawer.Screen name="Add Job Description" component={JobDesc} />
    <Drawer.Screen name="Employee List" component={EmpList} />
    </Drawer.Navigator>
    
  );
};
export default DrawerRoute;