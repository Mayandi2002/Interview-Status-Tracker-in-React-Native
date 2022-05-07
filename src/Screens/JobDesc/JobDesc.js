import React, { useState } from 'react';
import { View  , Text , Button , Pressable , ScrollView , Image, StyleSheet,
        TextInput, useWindowDimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomInput from "../../componet/CustomInput/CustomInput";
//import axios from "axios";
//import Icon from 'react-native-vector-icons/FontAwesome';

const JobDesc = () => {
  const[Form,SetForm] = useState({
      Firstname:'',
      Lastname:'',
      Email:'',
      Mobileno:'',
      PhoneNo:'',
      from:'',
      to:'',
    });
    const[Err,setErr] = useState('');
    const[FnameErr,setFnameErr] = useState('');
    const[LnameErr,setLnameErr] = useState('');
    const[EmailErr,setEmailErr] = useState('');

    const{Firstname,Lastname,Email,Mobileno,PhoneNo,from,to} = Form

        const handleOnchangeText = (value,fieldname) => {
            SetForm({...Form, [fieldname]: value});
          };
          
          const isValidObjField = (obj) => {
            return Object.values(obj).every(value => value.trim())
          }
          
          const updateError = (Err,stateUpdater) => {
          stateUpdater(Err);
          setTimeout(() => {
          stateUpdater('')
          },2000);
          }
          const [Role,setRole] = useState('');
          const [Year,setYear] = useState('');
          const [Skill,setSkill] = useState('');
          const [Location,setLocation] = useState('');
          const [Role1,setRole1] = useState('');

        
          const ValidationEmail = (value) => {
            const regx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            return regx.test(value)
          }
        
        
          const isValid = () => {
            if(!isValidObjField(Form)) {
              updateError('Require All Fields',setErr);
              return true; 
              }
            if(!ValidationEmail(Email)) {
              updateError('Invalid Email',setEmailErr);
              return true;
            }
            if(!Firstname.trim() || Firstname.length > 5) {
              updateError('Username is Allow only 5 Characters',setFnameErr);
              return true;
            }
            if(!Lastname.trim() || Lastname.length < 3) {
              updateError('Password is too Short',setLnameErr);
              return true;
            }
            if(!Mobileno.trim() || Mobileno.length > 10) {
              updateError('Please Enter Corrct MobileNo',setMobilenoErr);
              return true;
            }
            if(!PhoneNo.trim() || PhoneNo.length > 10 ) {
              updateError('Please Enter Corrct PhoneNo',setPhoneNoErr);
              return true;
            }
            };
        const submit = () => {
          if(!isValid) {

          
            alert("submit is pressed")
          }
        }

    return (
    <ScrollView style={{flex:1}}>
      <View style ={{alignItems: 'center', padding: 20, backgroundColor:"lightblue"}}>
      <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Position</Text>
    <Picker
      style={{alignItems:'center',width :'100%',backgroundColor:"white",color:"black"}}
      selectedValue = {Role} onValueChange = {setRole} placeholder="React">
            <Picker.Item label = "React" value = "react" />
            <Picker.Item label = "Native" value = "native" />
            <Picker.Item label = "Springboot" value = "spring" />
            <Picker.Item label = "AWS" value = "aws" />
    </Picker>
        <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Experience</Text>
    <Picker
      style={{alignItems:'center',width :'100%',backgroundColor:"white",color:"black"}}
      selectedValue = {Year} onValueChange = {setYear} placeholder="1-5">
            <Picker.Item label = "1-5" value = "1-5" />
            <Picker.Item label = "5-8" value = "5-8" />
            <Picker.Item label = "8-10" value = "8-10" />
            <Picker.Item label = "10-15" value = "10-15" />
        </Picker>
        <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Recquired Skills</Text>
    <Picker
      style={{alignItems:'center',width :'100%',backgroundColor:"white",color:"black"}}
      selectedValue = {Skill} onValueChange = {setSkill} placeholder="React">
            <Picker.Item label = "React" value = "react" />
            <Picker.Item label = "Native" value = "native" />
            <Picker.Item label = "Springboot" value = "spring" />
            <Picker.Item label = "AWS" value = "aws" />
    </Picker>
    <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Salary</Text>
    <TextInput 
      style={{
        backgroundColor: 'white',
        color:"black",
        width : '100%',
        borderColor: 'black',
        //borderColor: '#e8e8e8',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}}
      placeholder="From"
      placeholderTextColor="lightgrey"
      keyboardType="numeric"
      value={from}
      onChangeText={(value)=>handleOnchangeText(value,'from')} />
  <TextInput 
    style={{
        backgroundColor: 'white',
        color:"black",
        width : '100%',
        borderColor: 'black',
        //borderColor: '#e8e8e8',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}}
   placeholder="To"
   placeholderTextColor="lightgrey"
   keyboardType="numeric"
   value={to}
   onChangeText={(value)=>handleOnchangeText(value,'to')} />
  <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Job Location</Text>
  <Picker
    style={{alignItems:'center',width :'100%',backgroundColor:"white",color:"black"}}
    selectedValue = {Location} onValueChange = {setLocation} placeholder="tamilnadu">
            <Picker.Item label = "TamilNadu" value = "TamilNadu" />
            <Picker.Item label = "Bangalore" value = "Bangalore" />
            <Picker.Item label = "Kerala" value = "Kerala" />
            <Picker.Item label = "Delhi" value = "Delhi" />
    </Picker>
        <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Panel Information</Text>
  <CustomInput
    placeholder="Firstname"
    placeholderTextColor="lightgrey"
    value={Firstname}
    setValue={(value) => handleOnchangeText(value,'Firstname')} />

  <CustomInput
    placeholder="Lastname"
    placeholderTextColor="lightgrey"
    value={Lastname}
    setValue={(value)=>handleOnchangeText(value,'Lastname')} />


<CustomInput
  placeholder="Email"
  placeholderTextColor="lightgrey"
  value={Email}
  setValue={(value)=>handleOnchangeText(value,'Email')}
  keyboardType='email-address'
  autoCapitalize='none' 
  />

<CustomInput
  placeholder="Mobileno"
  placeholderTextColor="lightgrey"
  value={Mobileno}
  setValue={(value)=>handleOnchangeText(value,'Mobileno')}
  keyboardType='number-pad' />

<CustomInput
  placeholder="PhoneNo"
  placeholderTextColor="lightgrey"
  value={PhoneNo}
  setValue={(value)=>handleOnchangeText(value,'PhoneNo')}
  keyboardType='number-pad' /> 
  <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Role</Text> 
  <Picker
  style={{alignItems:'center',width :'100%',backgroundColor:"white",color:"black"}}
  selectedValue = {Role1} onValueChange = {setRole1} placeholder="Role">
          <Picker.Item label = "React" value = "react" />
          <Picker.Item label = "Native" value = "native" />
          <Picker.Item label = "Springboot" value = "spring" />
          <Picker.Item label = "AWS" value = "aws" />
      </Picker>    
      <Text></Text>
<Text></Text>
{Err ? <Text style={{color:"red",fontWeight:'bold'}}>{Err}</Text>:null}
{FnameErr ? <Text style={{color:"red",fontWeight:'bold'}}>{FnameErr}</Text>:null}
{LnameErr ? <Text style={{color:"red",fontWeight:'bold'}}>{LnameErr}</Text>:null}
{EmailErr ? <Text style={{color:"red",fontWeight:'bold'}}>{EmailErr}</Text>:null}

  <Pressable
  style={({ pressed }) => [{ 
    opacity: pressed ? 0.2 : 1.0 },
    styles.BtnStyle
  ]}
  onPress={submit}>
    <Text style={styles.BtnText}>Submit</Text>
    </Pressable>
  </View>
</ScrollView>
);
}
const styles = StyleSheet.create({
    BtnStyle:{
        backgroundColor: 'blue', 
        alignItems:"center",
        width : '85%',
        padding: 15,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth : 0.5,
      },
      BtnText:{
        fontWeight:'bold',
        fontSize:18,
        color:"white",
        alignItems:"center",
        
      }
})

export default JobDesc;