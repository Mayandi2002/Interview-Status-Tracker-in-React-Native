import React, { useState } from 'react';
import { Text,View,Image,ImageBackground,StyleSheet,useWindowDimensions,
         TextInput,Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import BGLogo from '../../../assets/images/Icanio2.png';
import Logo from '../../../assets/images/Icanio.png';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      if(!isValidObjField(User)) 
        return updateError('Require All Fields',Seterrors);
      if(!Username.trim() || Username.length > 25)
        return updateError('Username is Allow only 25 Characters',SetUserErr);
      if(!Password.trim() || Password.length < 5)
        return updateError('Password is too Short',SetPassErr);
  
        return true;
    };

  const [isSecureEntry, setIsSecureEntry] = useState(true);
    
  const {height} = useWindowDimensions();
  const MyStack = useNavigation();
  
  const loginpress = () => {

    if(isValid()) {
      console.log(User)
      //alert("validation success")
      
      console.log('infun')
         axios.put('http://192.168.1.3:8080/login', {
            userName: Username,
            password: Password,
            position: Position,
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
            if(data.msg === "panel"){
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

        const candidregister = () => {
            MyStack.navigate('CvvUpload');
          }
        const empregister = () => {
          alert("employee register")
            MyStack.navigate('RegEmp');
        }
        const jobdesc = () => {
          alert("job description")
            MyStack.navigate('JobDesc')
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
    
    <View style={styles.input}>
    
    <Icon name="user" color="blue" size={25} />
    <TextInput
    style={{flex:1,marginHorizontal:5,color:"black"}}
    placeholder='Username'
    placeholderTextColor="lightgrey"
    Value={Username}
    onChangeText={(value) => handleOnchangeText(value,'Username')}
    keyboardType='email-address'
    autoCapitalize='none'
    />
    </View>
    {UserErr ? <Text style={{color:"red",fontWeight:'bold',fontSize:13,marginRight :50}}>{UserErr}</Text>: null}

    
    <View style={styles.input2}>
    <Icon name="lock" color="mediumblue" size={25} />
    <TextInput
    style={{flex:1,marginHorizontal:5,color:"black"}}
    placeholder='Password'
    placeholderTextColor="lightgrey"
    Value={Password}
    onChangeText={(value) => handleOnchangeText(value,'Password')}
    secureTextEntry={isSecureEntry}
    //secureTextEntry={true}
    />
    <Icon
    onPress={()=>setIsSecureEntry(!isSecureEntry)}
    name={isSecureEntry ? "eye-slash":"eye"} color="mediumblue" size={25} />
    </View>

    {PassErr ? <Text style={{color:"red",fontWeight:'bold',fontSize:13,marginRight :140}}>{PassErr}</Text>: null}
    <Picker
      style={{alignItems:'center',width :'88%',backgroundColor:"white",color:"black"}}
       selectedValue = {Position} onValueChange = {SetPosition}>
        <Picker.Item label = "Employee" value = "employee" />
        <Picker.Item label = "Panel" value = "panel" />
        <Picker.Item label = "Admin" value = "admin" />
        <Picker.Item label = "HR" value = "hr" />
    </Picker>  

    <Pressable
    style={({ pressed }) => [{ 
     opacity: pressed ? 0.7 : 1.0 }, styles.Btn1Style]}
    onPress={loginpress}>
    
    <Text style={styles.LoginBtntxt}>Login</Text>
    <Icon style={{marginHorizontal:10}} name="arrow-right" color="white" size={15}/>
    </Pressable>

    <Pressable
    style={({ pressed }) => [{ 
     opacity: pressed ? 0.7 : 1.0 }, styles.Btn2Style]}
    onPress={candidregister}>
      <Text style={styles.BtnText}>Register Candidate</Text>
    </Pressable>

    <Pressable
    style={({ pressed }) => [{ 
      opacity: pressed ? 0.7 : 1.0 },
      styles.Btn2Style
    ]}
    onPress={empregister}>
      <Text style={styles.BtnText}>Create Employee</Text>
    </Pressable>
    <Pressable
    style={({ pressed }) => [{ 
      opacity: pressed ? 0.7 : 1.0 },
      styles.Btn2Style
    ]}

    onPress={jobdesc}>
      <Text style={styles.BtnText}>Job Description</Text>
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
      flexDirection:'row',
         width :'90%',
         alignItems:'center',
         borderColor : 'black',
         borderWidth : 0.5,
         borderRadius: 7,
         
         
         paddingHorizontal:7,
         //marginHorizontal:1,
         //marginVertical:5,
    },
    input2:{
      backgroundColor: 'white',
      flexDirection:'row',
      //color:"black",
         width :'90%',
         alignItems:'center',
         borderColor : 'black',
         borderWidth : 0.5,
         borderRadius: 7,
         
         
         paddingHorizontal:7,
         //marginHorizontal:1,
         marginVertical:10,
    },
    show:{
      marginLeft :270
    },

    Btn1Style:{
      backgroundColor: 'blue', 
      alignItems:"center",
      flexDirection:'row', 

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
      alignItems:"center",
      
    },
    LoginBtntxt:{
      paddingLeft :100,
      fontWeight:'bold',
      fontSize:15,
      color:"white",
      alignItems:"center",
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