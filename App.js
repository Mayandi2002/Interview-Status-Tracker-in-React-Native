import 'react-native-gesture-handler';
import React from 'react';
import { Text,View,Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Screens/Login/Login';
import Main from './src/Screens/Main/Main';
import Set from './src/Screens/Set/Set';
import MyStack from './src/Navigation/MyStack';
import { LogBox } from 'react-native';
import { Card } from 'react-native-paper';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <View style={styles.root} >
      <NavigationContainer>
    <MyStack />
    </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBfC'
  }
});

export default App;