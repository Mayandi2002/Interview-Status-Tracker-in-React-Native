import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main/Main';
import Main2 from '../Screens/Main2/Main2';
//import Set from '../Screens/Dashboard/Dashboard';
import Home from '../Screens/Home/Home';
import CvvView from '../Screens/CvvView/CvvView';
import CvvView2 from '../Screens/CvvView2/CvvView2';
import CvvUpload from '../Screens/CvvUpload/CvvUpload';
import CvvUpdate from '../Screens/CvvUpload/CvvUpdate/CvvUpdate';
import Dashboard from '../Screens/Dashboard/Dashboard';
import RegEmp from '../Screens/RegEmp/RegEmp';
import EmpList from '../Screens/EmpList/EmpList';
import EmpList2 from '../Screens/EmpList2/EmpList2';
import EmpView from '../Screens/EmpView/EmpView';
import EmpView2 from '../Screens/EmpView2/EmpView2';
import JobDesc from '../Screens/JobDesc/JobDesc';
import CandidateStatus from '../Screens/CandidateStatus/CandidateStatus';
import DrawerRoute from '../DrawerRoute/DrawerRoute';
import DrawerRoute2 from '../DrawerRoute2/DrawerRoute2';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}
        options={{
          title: 'Log In',
          headerTitleStyle: {
            color: 'blue',
            fontWeight:'bold',
            fontSize:20,
            alignSelf:'center',
            //justifyContent:'center'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          },
        }}
        />
        <Stack.Screen name="Main" component={DrawerRoute}
        options={{
          title: 'Candidates List',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="Main2" component={DrawerRoute2}
        options={{
          title: 'Candidates List',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="Candidate Register" component={Home} />
        <Stack.Screen name="CvvView" component={CvvView} 
         options={{
          title: 'Candidate Details',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'mediumblue',
          },
        }}
        />
        <Stack.Screen name="CvvView2" component={CvvView2} 
         options={{
          title: 'Candidate Details',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'mediumblue',
          },
        }}
        />
        <Stack.Screen name="CvvUpload" component={CvvUpload} 
         options={{
          title: 'CvvUpload',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="CvvUpdate" component={CvvUpdate} 
         options={{
          title: 'CvvUpdate',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="Dash Board" component={Dashboard} 
        options={{
          title: 'Dash Board',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="Candidate Status" component={CandidateStatus} 
        options={{
          title: 'Candidate Status List',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="RegEmp" component={RegEmp}
        options={{
          title: 'Create Employee',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="EmpList" component={EmpList}
        options={{
          title: 'Employee List',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="EmpList2" component={EmpList2}
        options={{
          title: 'Employee List',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="EmpView" component={EmpView} 
          options={{
          title: 'Emp Details',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="EmpView2" component={EmpView2} 
          options={{
          title: 'Emp Details',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="JobDesc" component={JobDesc}
        options={{
          title: 'Create Job Description',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
      </Stack.Navigator>
  );
};

export default MyStack;