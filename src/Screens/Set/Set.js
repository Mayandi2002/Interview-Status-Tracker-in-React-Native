import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Login from '../Login/Login';
import Main from '../Main/Main';
const Set = () => {
  return (
    <View style={styles.container}>
        <Card>
            <Text style={styles.paragraph}>Login</Text>
      <Login />
      </Card>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding:30,
      paddingTop : 5,
      paddingBottom :50,
      borderRadius:50
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color:"blue",
    },
  });
  
export default Set;