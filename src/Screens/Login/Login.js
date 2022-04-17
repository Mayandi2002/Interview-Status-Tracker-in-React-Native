import React, {useState} from 'react';
import { Text,View,Image,StyleSheet,useWindowDimensions,TextInput,Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/Logo.png';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

//import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
//import { Icon } from 'react-native-paper/lib/typescript/components/List/List';

const isValidObjField = (obj) => {
  return Object.values(obj).every(value => value.trim())
}

const updateError = (errors,stateUpdater) => {
stateUpdater(errors);
setTimeout(() => {
stateUpdater('')
},5000);
}

const Login = () => {

  const[User,setUser] = useState({
    Username:'',
    Password:'',
    });
  
    const[errors,Seterrors] = useState('')
    const{Username,Password} = User
  
    const handleOnchangeText = (value,fieldname) =>{
      setUser({...User, [fieldname]: value});
    };
  
    const isValid = () =>{
      if(!isValidObjField(User)) 
        return updateError('Require All Fields',Seterrors);
      if(!Username.trim() || Username.length > 5)
        return updateError('Username is allowed maximum 5 characters',Seterrors);
      if(!Password.trim() || Password.length < 8)
        return updateError('Password is too short',Seterrors);
  
        return true;
    };

  //const [Username,setUsername] = useState('');
  //const [Password,setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);
    
  const {height} = useWindowDimensions();
  const MyStack = useNavigation();
  
  const loginpress = () => {

    if(isValid()) {
      console.log(User)
      alert("validation success")
      
      console.log('infun')
         axios.put('http://192.168.43.31:8080/login', {
            userName: Username,
            password: Password,
          })
          .then(({data}) => {
              //alert('Login Successfully')
            alert(data);
            console.log(data)
          })
          .catch(function (error) {
              alert(error)
              console.log(error);
          });
        //alert("login success");
    MyStack.navigate('Main');
        }
        }

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
    
   {errors ? <Text style={{color:"red"}}>{errors}</Text>: null}
    
    <TextInput
    style={styles.input}
    placeholder='Username'
    placeholderTextColor="lightgrey"
    Value={Username}
    onChangeText={(value) => handleOnchangeText(value,'Username')}
    />
    <View style={{flexDirection:'row'}}>
    
    <TextInput
    style={styles.input2}
    placeholder='Password'
    placeholderTextColor="lightgrey"
    Value={Password}
    onChangeText={(value) => handleOnchangeText(value,'Password')}
    secureTextEntry={isSecureEntry}
    //secureTextEntry={true}

    />
    <TouchableOpacity style={{padding:1,paddingTop :15,paddingRight :3}}
                onPress={() => {
                  setIsSecureEntry((prev) => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
              </View>

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
      color:"black",
         width :'100%',

         borderColor : 'black',
         borderWidth : 0.5,
         borderRadius: 7,
         
         
         paddingHorizontal:5,
         marginHorizontal:10,
         marginVertical:5,
    },
    input2:{
      backgroundColor: 'white',
      color:"black",
         width :'90%',

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