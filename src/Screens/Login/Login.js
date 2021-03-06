import React, { useState,useEffect } from 'react';
import { Text,View,Image,ImageBackground,StyleSheet,useWindowDimensions,
         TextInput,Pressable,TouchableOpacity,ToastAndroid } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import BGLogo from '../../../assets/images/Icanio2.png';
import Logo from '../../../assets/images/Icanio.png';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
//import { Card } from 'react-native-paper';

const Login = () => {

  const[User,setUser] = useState({
    Username:'',
    Password:'',
    });
    const[Position,SetPosition] = useState('');
    const[errors,Seterrors] = useState('');
    const[UserErr,SetUserErr] = useState('');
    const[PassErr,SetPassErr] = useState('');
    const{Username,Password} = User
  
    const handleOnchangeText = (value,fieldname) => {
      setUser({...User, [fieldname]: value});
    };

    const isValidObjField = (obj) => {
      return Object.values(obj).every(value => value.trim())
    }
    
    const updateError = (errors,stateUpdater) => {
    stateUpdater(errors);
    setTimeout(() => {
    stateUpdater('')
    },2000);
    }
  
    const isValid = () => {
      if(!isValidObjField(User)) {
        updateError('Require All Fields',Seterrors);
        return true;
      }
      if(!Username.trim() || Username.length > 30) {
        updateError('Username is too Long',SetUserErr);
        return true;
      }
      if(!Password.trim() || Password.length < 5){
        updateError('Password is too Short',SetPassErr);
        return true;
      }    
    };

  const [isSecureEntry, setIsSecureEntry] = useState(true);
    
  const {height} = useWindowDimensions();
  const MyStack = useNavigation();
  
  const [Drop,setDrop] = useState([])
  useEffect(()=>{
    axios.get("http://192.168.1.3:8080/dropDown/role")
    .then(({data}) => {
    console.log(data)
    setDrop(data)
    })
    .catch((err) => {
    console.log(err)
    })
  }, [])
  
  const loginpress = () => {

    if(!isValid()) {
      console.log(User)
      
      console.log('Connecting Api')
        axios.put('http://192.168.1.3:8080/login', {
            userName: Username,
            password: Password,
            position: Position,
          })
          .then(({data})=> {
            ToastAndroid.show("Login Successfully",ToastAndroid.SHORT);
            ToastAndroid.show(data.msg,ToastAndroid.SHORT);
            console.log(data)
            if(data.msg === "employee"){
              MyStack.navigate('EmpList2');
            }
            if(data.msg === "admin"){
              MyStack.navigate('Main');
            }
            if(data.msg === "hr"){
              MyStack.navigate('Main');
            }
            if(data.msg === "panel"){
              MyStack.navigate('Main2');
            }
          })
          .catch(({response}) => {
              ToastAndroid.show(response.data.msg,ToastAndroid.SHORT);
              console.log(response.data);
          })
        }       
      }

  return (
    <View style={styles.root}>
    <ImageBackground
      style={[styles.BGImg,{height : height * 1.5}]}
      source={BGLogo}
      resizeMode="contain" />

    <Image 
      source={Logo} 
      style={[styles.Logo, {height : height * 0.3}]}
      resizeMode="contain" />
    
    {errors ? <Text style={{color:"red",fontWeight:'bold',fontSize:15.5}}>{errors}</Text>: null}
    
    <View style={styles.input}>
    <Icon name="user" color="mediumblue" size={25} />
    <TextInput
      style={{flex:1,marginHorizontal:5,color:"black"}}
      placeholder='Username'
      placeholderTextColor="lightgrey"
      Value={Username}
      onChangeText={(value) => handleOnchangeText(value,'Username')}
      keyboardType='email-address' />
    </View>
      {UserErr ? <Text style={{color:"red",fontWeight:'bold',fontSize:13,marginRight :150}}>{UserErr}</Text>: null}
    
    <View style={styles.input2}>
    <Icon name="lock" color="mediumblue" size={25} />
    <TextInput
      style={{flex:1,marginHorizontal:5,color:"black"}}
      placeholder='Password'
      placeholderTextColor="lightgrey"
      Value={Password}
      onChangeText={(value) => handleOnchangeText(value,'Password')}
      secureTextEntry={isSecureEntry} />
    <IIcon
      onPress={()=> setIsSecureEntry(!isSecureEntry)}
      name={isSecureEntry ? "ios-eye-off":"ios-eye"} color="mediumblue" size={25} />
    </View>
    {PassErr ? <Text style={{color:"red",fontWeight:'bold',fontSize:13,marginRight :140}}>{PassErr}</Text>: null}

    <Picker
      style={styles.pickstyl} 
      mode="dropdown"
      selectedValue = {Position}
      onValueChange = {SetPosition}>
      {Drop?.data?.map((dropdata,idx) => (
      <Picker.Item 
        key={idx}
        label = {dropdata} 
        value = {dropdata} />))}
    </Picker>  

    <Pressable
      style={({ pressed }) => [{ 
      opacity: pressed ? 0.7 : 1.0 }, styles.Btn1Style]}
      onPress={loginpress}>
        <Text style={styles.LoginBtntxt}>Login</Text>
        <Icon 
          style={{marginHorizontal:10}} 
          name="arrow-right" 
          color="white"
          size={15} />
    </Pressable>
    
    {/* 
    <Pressable
    style={({ pressed }) => [{ 
    opacity: pressed ? 0.7 : 1.0 }, styles.Btn1Style]}
    onPress={()=>MyStack.navigate('CvvUpload')}>
    <Text style={styles.LoginBtntxt}>Candidate Register</Text>
    </Pressable>
    
    <Pressable
    style={({ pressed }) => [{ 
    opacity: pressed ? 0.7 : 1.0 }, styles.Btn1Style]}
    onPress={()=>MyStack.navigate('RegEmp')}>
    <Text style={styles.LoginBtntxt}>Create Employee</Text>
    </Pressable>

    <Pressable
    style={({ pressed }) => [{ 
    opacity: pressed ? 0.7 : 1.0 }, styles.Btn1Style]}
    onPress={()=>MyStack.navigate('JobDesc')}>
    <Text style={styles.LoginBtntxt}>Job Description</Text>
    </Pressable>*/}
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
      tintColor: "mediumblue",
      //marginVertical:10,
    },
    BGImg: { 
      marginLeft :280,
      width :'95%',
      maxWidth : 330,
      maxHeight : 5,
    },
    input:{
      backgroundColor: 'white',
      flexDirection:'row',
      width :'90%',
      alignItems:'center',
      borderColor : 'black',
      borderWidth : 0.4,
      borderRadius: 7,
      paddingHorizontal:7,
    },
    input2:{
      backgroundColor: 'white',
      flexDirection:'row',
      width :'90%',
      alignItems:'center',
      borderColor : 'black',
      borderWidth : 0.4,
      borderRadius: 7,
      paddingHorizontal:7,
      marginVertical:10,
    },    
    show:{
      marginLeft :270
    },
    pickstyl:{
      alignItems:'center',
      width :'85%',
      backgroundColor:"white",
      color:"black"
    },
    Btn1Style:{
      backgroundColor: 'mediumblue', 
      alignItems:"center",
      flexDirection:'row', 
      width : '83%',
      padding: 15,
      marginVertical: 20,
      alignItems: 'center',
      borderRadius: 5,
      borderWidth : 0.5,
    },
    LoginBtntxt:{
      paddingLeft :100,
      fontWeight:'bold',
      fontSize:15,
      //marginVertical:10,
      color:"white",
      alignItems:"center",
    },
});

export default Login;