import React, { useState } from 'react';
import { View  , Text , Button , Pressable , ScrollView , Image, StyleSheet,
        TextInput, useWindowDimensions,ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import CustomInput from "../../componet/CustomInput/CustomInput";
import axios from "axios";
//import Icon from 'react-native-vector-icons/FontAwesome';

const JobDesc = () => {
  const[Form,SetForm] = useState({
      From:'',
      To:'',
    });
    const[Err,setErr] = useState('');

    const{From,To} = Form

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
          const [Position,setPosition] = useState('');
          const [Year,setYear] = useState('');
          const [Skill,setSkill] = useState('');
          const [Location,setLocation] = useState('');
          const [Qualification,setQualifiaction] = useState('');

        
        
          const isValid = () => {
            if(!isValidObjField(Form)) {
              updateError('Require All Fields',setErr);
              return true; 
              }
            };

        const submit = () => {
          if(isValid) {
          console.log("api connection")
          axios.post('http://35.154.117.105:8080/jobDescription',{
            position:Position,
            experience:Year,
            skill:[Skill],
            salary:{from:From,to:To},
            location:[Location],
            qualification:[Qualification]
          })
            .then(({data})=>{
              //alert(data.msg)
              ToastAndroid.show(data.msg,ToastAndroid.SHORT);
              console.log(data);
            })
            .catch(({response})=>{
              console.log(response.data)
            })
          
          
            
          }
        }

    return (
    <ScrollView style={{flex:1}}>
      <View style ={{alignItems: 'center', padding: 20, backgroundColor:"lightblue"}}>
      <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Position</Text>
    <Picker
      style={{alignItems:'center',width :'100%',backgroundColor:"white",color:"black"}}
      selectedValue = {Position} onValueChange = {setPosition} placeholder="React">
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
      value={From}
      onChangeText={(value)=>handleOnchangeText(value,'From')} />
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
   value={To}
   onChangeText={(value)=>handleOnchangeText(value,'To')} />
  <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Job Location</Text>
  <Picker
    style={{alignItems:'center',width :'100%',backgroundColor:"white",color:"black"}}
    selectedValue = {Location} onValueChange = {setLocation} placeholder="tamilnadu">
            <Picker.Item label = "TamilNadu" value = "TamilNadu" />
            <Picker.Item label = "Bangalore" value = "Bangalore" />
            <Picker.Item label = "Kerala" value = "Kerala" />
            <Picker.Item label = "Delhi" value = "Delhi" />
    </Picker>
         
  <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Role</Text> 
  <TextInput 
      style={{
        backgroundColor: 'white',
        color:"black",
        width : '100%',
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}}
      placeholder="Qualification"
      placeholderTextColor="lightgrey"
      value={Qualification}
      onChangeText={setQualifiaction} />
<Text></Text>
{Err ? <Text style={{color:"red",fontWeight:'bold'}}>{Err}</Text>:null}
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