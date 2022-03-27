import React from 'react';
import { Text,View,Image,StyleSheet } from 'react-native';
import Login from './src/Screens/Login/Login';
import Main from './src/Screens/Main/Main';

const App = () => {
  return (
    <View>
    <Text style={styles.text}>hello</Text>
    <Login />
    </View>
  );
}
const styles=StyleSheet.create({
  text: {
    alignItems:'center',
    padding:20,
    color:"red"
  }
});

export default App;