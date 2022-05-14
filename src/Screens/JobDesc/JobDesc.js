import React, { useState,useEffect } from 'react';
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

            const [Pos,setPos] = useState([])
            useEffect(()=>{
              axios.get('http://35.154.117.105:8080/dropDown/position')
              .then(({data}) => {
                console.log(data)
                setPos(data)
                })
                .catch((err) => {
                console.log(err)
                })
              }, [])

            const [Exp,setExp] = useState([])
            useEffect(()=>{
              axios.get('http://35.154.117.105:8080/dropDown/experience')
              .then(({data}) => {
                console.log(data)
                setExp(data)
                })
                .catch((err) => {
                console.log(err)
                })
              }, [])

              const [SKILL,setSKILL] = useState([])
            useEffect(()=>{
              axios.get('http://35.154.117.105:8080/dropDown/skill')
              .then(({data}) => {
                console.log(data)
                setSKILL(data)
                })
                .catch((err) => {
                console.log(err)
                })
              }, [])

              const [Loc,setLoc] = useState([])
            useEffect(()=>{
              axios.get('http://35.154.117.105:8080/dropDown/location')
              .then(({data}) => {
                console.log(data)
                setLoc(data)
                })
                .catch((err) => {
                console.log(err)
                })
              }, [])

              const [Quali,setQuali] = useState([])
            useEffect(()=>{
              axios.get('http://35.154.117.105:8080/dropDown/qualification')
              .then(({data}) => {
                console.log(data)
                setQuali(data)
                })
                .catch((err) => {
                console.log(err)
                })
              }, [])

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
      
    <View style ={styles.container}>
      
      <Text style={styles.heading}>Position</Text>
   
    <Picker
      style={styles.pick}
        mode="dropdown"
        selectedValue = {Position} 
        onValueChange = {setPosition} >
        {Pos?.data?.map((dropPos,idx) => (
            <Picker.Item key={idx} label = {dropPos} value = {dropPos} />))}
    </Picker>
        
        <Text style={styles.heading}>Experience</Text>
    
    <Picker
      style={styles.pick}
      mode="dropdown"
      selectedValue = {Year} 
      onValueChange = {setYear}>
        {Exp?.data?.map((dropExp,idx)=>(
            <Picker.Item key={idx} label = {dropExp} value = {dropExp} />))}
        </Picker>
        
        <Text style={styles.heading}>Recquired Skills</Text>
    
    <Picker
      style={styles.pick}
      mode="dropdown"
      selectedValue = {Skill} 
      onValueChange = {setSkill}>
        {SKILL?.data?.map((dropSkill,idx) => (
          <Picker.Item key={idx} label = {dropSkill} value = {dropSkill} />))}
        
    </Picker>
    
    <Text style={styles.heading}>Salary</Text>
    
    <TextInput 
      style={styles.input}
      placeholder="From"
      placeholderTextColor="lightgrey"
      keyboardType="numeric"
      value={From}
      onChangeText={(value)=>handleOnchangeText(value,'From')} />
  <TextInput 
    style={styles.input}
   placeholder="To"
   placeholderTextColor="lightgrey"
   keyboardType="numeric"
   value={To}
   onChangeText={(value)=>handleOnchangeText(value,'To')} />
  <Text style={styles.heading}>Job Location</Text>
  
  <Picker
    style={styles.pick}
    mode="dropdown"
    selectedValue = {Location} 
    onValueChange = {setLocation}>
      {Loc?.data?.map((dropLoc,idx)=>(
        <Picker.Item key={idx} label = {dropLoc} value = {dropLoc} />))}
  </Picker>
         
  <Text style={styles.heading}>Qualification</Text> 
      
      <Picker
       style={styles.pick}
       mode="dropdown"
       selectedValue = {Qualification} 
       onValueChange = {setQualifiaction}>
        { Quali?.data?.map((dropQuali,idx) => (
        <Picker.Item key={idx} label = {dropQuali} value = {dropQuali} />))}
      </Picker>

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
    container:{
        alignItems: 'center', 
        padding: 15, 
        backgroundColor:"lightblue"
      },
    BtnStyle:{
        backgroundColor: 'blue', 
        alignItems:"center",
        width : '85%',
        padding: 15,
        marginVertical: 3,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth : 0.5,
      },
      BtnText:{
        fontWeight:'bold',
        fontSize:18,
        color:"white",
        alignItems:"center",
        
      },
      heading: {
        fontSize: 25,
        fontWeight:'bold',
        color: 'gray',
        padding: 1,
        //margin:1,
      },
      pick:{
        alignItems:'center',
        width :'100%',
        backgroundColor:"white",
        color:"black",
      },
      input:{
        backgroundColor: 'white',
        color:"black",
        width : '100%',
        borderColor: 'black',
        //borderColor: '#e8e8e8',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 3
      }
})

export default JobDesc;