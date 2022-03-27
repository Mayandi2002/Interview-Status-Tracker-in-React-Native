import React from 'react';
import { Text,View,Image,StyleSheet,useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/Logo.png';

const Login = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Text>hello icanio</Text>
    <Image 
    source={Logo} 
    style={[styles.Logo, {height : height * 0.3}]}
    resizeMode="contain"
    />
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 15,
    },
    Logo: {
        width : '100%',
        maxWidth : 200,
        maxHeight : 150,
    },
});


export default Login;