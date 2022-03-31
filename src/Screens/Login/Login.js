import React from 'react';
import { Text,View,Image,StyleSheet,useWindowDimensions,TextInput,Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/Logo.png';

const Login = () => {
  const {height} = useWindowDimensions();
  const MyStack = useNavigation();
  
  const loginpress = () => {
    console.warn("loginpressed");
    MyStack.navigate('Main');
};
const setpress = () => {
  console.warn("Setpress");
  MyStack.navigate('Home');
}
  return (
    <View style={styles.root}>
    
    <Image 
    source={Logo} 
    style={[styles.Logo, {height : height * 0.3}]}
    resizeMode="contain"
    />

    <TextInput
    style={styles.input}
    placeholder='username'
    placeholderTextColor="lightgrey"
    />
    <TextInput
    style={styles.input}
    placeholder='username'
    placeholderTextColor="lightgrey"
    />

    <Pressable
    style={({ pressed }) => [{ 
        opacity: pressed ? 0.7 : 1.0 },
        styles.Btn1Style
      ]}
    onPress={loginpress}>
    <Text style={styles.BtnText}>
    Login
    </Text>
    </Pressable>

    <Pressable
    style={({ pressed }) => [{ 
      opacity: pressed ? 0.2 : 1.0 },
      styles.Btn2Style
    ]}
    onPress={setpress}>
      <Text>Settings</Text>
    </Pressable>
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
    input:{
      backgroundColor: 'white',
         width :'100%',

         borderColor : '#e8e8e8',
         borderWidth : 1,
         borderRadius: 7,
         
         
         paddingHorizontal:5,
         marginHorizontal:10,
         marginVertical:5,
    },
    Btn1Style:{
      backgroundColor: '#3B71F3',  

        width : '90%',

        padding: 15,
        marginVertical: 8,

        alignItems: 'center',
        borderRadius: 5,
    },
    BtnText:{
      fontWeight:'bold',
      color:"white",
    },
    Btn2Style:{
      padding:1,
      marginVertical: 8,

      alignItems: 'center'
    }
});


export default Login;