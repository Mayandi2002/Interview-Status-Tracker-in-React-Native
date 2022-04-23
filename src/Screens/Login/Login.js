import React, {useState} from 'react';
import { Text,View,Image,ImageBackground,StyleSheet,useWindowDimensions,TextInput,Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BGLogo from '../../../assets/images/Icanio2.png';
import Logo from '../../../assets/images/Icanio.png';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
//import { Icon } from 'react-native-paper/lib/typescript/components/List/List';

const isValidObjField = (obj) => {
  return Object.values(obj).every(value => value.trim())
}

const updateError = (errors,stateUpdater) => {
stateUpdater(errors);
setTimeout(() => {
stateUpdater('')
},2000);
}

const Login = () => {

  const[User,setUser] = useState({
    Username:'',
    Password:'',
    });
  
    const[errors,Seterrors] = useState('');
    const[UserErr,SetUserErr] = useState('');
    const[PassErr,SetPassErr] = useState('');
    const{Username,Password} = User
  
    const handleOnchangeText = (value,fieldname) =>{
      setUser({...User, [fieldname]: value});
    };
  
    const isValid = () =>{
      if(!isValidObjField(User)) 
        return updateError('Require All Fields',Seterrors);
      if(!Username.trim() || Username.length > 25)
        return updateError('Username is Allow only 25 Characters',SetUserErr);
      if(!Password.trim() || Password.length < 5)
        return updateError('Password is too Short',SetPassErr);
  
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
      //alert("validation success")
      
      console.log('infun')
         axios.put('http://192.168.0.137:8080/login', {
            userName: Username,
            password: Password,
          })
          .then(({data})=> {
              //alert('Login Successfully')
            alert(data.msg)
            console.log(data)
            if(data.msg === "employee"){
              MyStack.navigate('Main');
            }
            if(data.msg === "admin"){
              MyStack.navigate('Main');
            }
          })
          .catch(({response}) => {
              alert(response.data.msg)
              //alert(msg)
              console.log(response.data);
          })
        //alert("login success");
    //MyStack.navigate('Main');
        }
        //MyStack.navigate('Main');
        }

        const registerpress = () => {
  //console.warn("regpress");
  MyStack.navigate('CvvUpload');
}


  return (
    <View style={styles.root}>
    <ImageBackground
    style={{
      marginLeft :280,
      //marginBottom :10,

      width :'95%',
    maxWidth : 330,
    maxHeight : 5,
    height : height * 1.5}}
    source={BGLogo}
    resizeMode="contain" />
    <Image 
    source={Logo} 
    style={[styles.Logo, {height : height * 0.3}]}
    resizeMode="contain"
    />
    
    {errors ? <Text style={{color:"red",fontWeight:'bold',fontSize:15.5}}>{errors}</Text>: null}
    <View style={{flexDirection:'row',paddingRight :20}}>
    
    <Icon style={{padding:12}} name="user" color="blue" size={30} />
   
    <TextInput
    style={styles.input}
    placeholder='Username'
    placeholderTextColor="lightgrey"
    Value={Username}
    onChangeText={(value) => handleOnchangeText(value,'Username')}
    keyboardType='email-address'
    autoCapitalize='none'
    />
    </View>
    {UserErr ? <Text style={{color:"red",fontWeight:'bold',fontSize:13,marginRight :50}}>{UserErr}</Text>: null}

    {PassErr ? <Text style={{color:"red",fontWeight:'bold',fontSize:13,marginRight :140}}>{PassErr}</Text>: null}
    
    <View style={{flexDirection:'row',paddingRight :20}}>
    
    <Icon style={{padding:12}} name="lock" color="mediumblue" size={30} />
    <TextInput
    style={styles.input2}
    placeholder='Password'
    placeholderTextColor="lightgrey"
    Value={Password}
    onChangeText={(value) => handleOnchangeText(value,'Password')}
    secureTextEntry={isSecureEntry}
    //secureTextEntry={true}
    />
  </View>
  <View style={styles.show}>
    <TouchableOpacity 
      style={{padding:5,paddingTop :5,paddingRight :5}}
      onPress={() => {
      setIsSecureEntry((prev) => !prev);}}>
        <Text style={{color:"blue",fontWeight:'bold'}}>{isSecureEntry ? 'Show' : 'Hide'}</Text>
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
        padding: 20,
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
         width :'97%',

         borderColor : 'black',
         borderWidth : 0.5,
         borderRadius: 7,
         
         
         paddingHorizontal:5,
         marginHorizontal:1,
         marginVertical:5,
    },
    input2:{
      backgroundColor: 'white',
      color:"black",
         width :'97%',

         borderColor : 'black',
         borderWidth : 0.5,
         borderRadius: 7,
         
         
         paddingHorizontal:5,
         marginHorizontal:1,
         marginVertical:5,
    },
    show:{
      marginLeft :270
    },

    Btn1Style:{
      backgroundColor: 'blue',  

        width : '85%',

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

        width : '85%',

        padding: 15,
        marginVertical: 8,

        alignItems: 'center',
        borderRadius: 5,
        borderWidth : 0.5,
    }
});


export default Login;