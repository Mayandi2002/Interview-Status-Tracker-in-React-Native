import React from 'react';
import { Text,View,Image,StyleSheet,useWindowDimensions,TextInput,Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/Logo.png';

const Login = () => {
  const {height} = useWindowDimensions();
  const MyStack = useNavigation();
  
  const loginpress = () => {
    MyStack.navigate('Main');
};
const registerpress = () => {
  //console.warn("regpress");
  MyStack.navigate('CvvUpload');
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
    placeholder='Username'
    placeholderTextColor="lightgrey"
    />
    <TextInput
    style={styles.input}
    placeholder='Password'
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
    onPress={registerpress}>
      <Text style={styles.BtnText}>Register Candidate</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
      flex:1,
        alignItems: 'center',
        padding: 15,
        backgroundColor:"lightblue"
    },
    Logo: {
        width : '100%',
        maxWidth : 200,
        maxHeight : 150,
    },
    input:{
      backgroundColor: 'white',
         width :'100%',

         borderColor : 'black',
         borderWidth : 0.5,
         borderRadius: 7,
         
         
         paddingHorizontal:5,
         marginHorizontal:10,
         marginVertical:5,
    },
    Btn1Style:{
      backgroundColor: 'blue',  

        width : '90%',

        padding: 15,
        marginVertical: 8,

        alignItems: 'center',
        borderRadius: 5,
        borderWidth : 0.5,
    },
    BtnText:{
      fontWeight:'bold',
      fontSize:15,
      color:"white",
    },
    Btn2Style:{
      backgroundColor: 'mediumblue',  

        width : '90%',

        padding: 15,
        marginVertical: 8,

        alignItems: 'center',
        borderRadius: 5,
        borderWidth : 0.5,
    }
});


export default Login;