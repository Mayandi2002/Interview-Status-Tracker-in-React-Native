import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet,
         TextInput, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from "axios";

  const JobDesc = () => {    
    const[Form,SetForm] = useState({
      From:'',
      To:'',
      Responsiblities:'',
    });
      const[Err,setErr] = useState('');
      const{From,To,Responsiblities} = Form
          const handleOnchangeText = (Value,fieldname) => {
            SetForm({...Form, [fieldname]: Value});
          };          
          const isValidObjField = (obj) => {
            return Object.values(obj).every(Value => Value.trim())
          }         
          const updateError = (Err,stateUpdater) => {
          stateUpdater(Err);
          setTimeout(() => {
          stateUpdater('')
          },2000);
          }
          const [Position,setPosition] = useState('');
          //const [Responiblities,setResponsiblities] = useState('');
          const [Employee,setEmployee] = useState('');
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
              axios.get('http://192.168.1.3:8080/dropDown/position')
              .then(({data}) => {
                console.log(data)
                setPos(data)
                })
                .catch((err) => {
                console.log(err)
                })
              }, [])

              const [Emp,setEmp] = useState([])
              useEffect(()=>{
                axios.get('http://192.168.1.3:8080/dropDown/employee')
                .then(({data}) => {
                  console.log(data)
                  setEmp(data)
                  })
                  .catch((err) => {
                  console.log(err)
                  })
                }, [])  

            const [Exp,setExp] = useState([])
            useEffect(()=>{
              axios.get('http://192.168.1.3:8080/dropDown/experience')
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
              axios.get('http://192.168.1.3:8080/dropDown/skill')
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
              axios.get('http://192.168.1.3:8080/dropDown/location')
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
              axios.get('http://192.168.1.3:8080/dropDown/qualification')
              .then(({data}) => {
                console.log(data)
                setQuali(data)
                })
                .catch((err) => {
                console.log(err)
                })
              }, [])

      const submit = () => {
          if(!isValid()) {
          console.log("api connection")
          axios.post('http://192.168.1.3:8080/job',{
            employeeId:Employee,
            position:Position,
            experience:Year,
            skill:[ Skill ],
            salary:{
              from:From,
              to:To
            },
            location:[ Location ],
            qualification:[ Qualification ],
            responsiblities:[ Responsiblities ]
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
        <View style={{flexDirection:'row',marginVertical:4}}>
      <Text style={styles.heading}>Employee</Text>
    <Picker
      style={styles.pick}
        mode="dropdown"
        selectedValue = {Employee} 
        onValueChange = {setEmployee} >
        {Emp.map((dropEmp,idx) => (
            <Picker.Item key={idx} label = {dropEmp.name} value = {dropEmp.id} />))}
    </Picker>
    </View>
    <View style={{flexDirection:'row',marginVertical:4}}>
      <Text style={styles.heading}>Position</Text>
    <Picker
      style={styles.pick}
        mode="dropdown"
        selectedValue = {Position} 
        onValueChange = {setPosition} >
        {Pos?.data?.map((dropPos,idx) => (
            <Picker.Item key={idx} label = {dropPos} value = {dropPos} />))}
    </Picker>
    </View>
    <View style={{flexDirection:'row',marginVertical:4}}>
        <Text style={styles.heading}>Experience</Text>
    <Picker
      style={styles.pick}
      mode="dropdown"
      selectedValue = {Year} 
      onValueChange = {setYear}>
        {Exp?.data?.map((dropExp,idx)=>(
            <Picker.Item key={idx} label = {dropExp} value = {dropExp} />))}
    </Picker>
    </View>   
    <View style={{flexDirection:'row',marginVertical:4}}>
        <Text style={styles.heading}>Skills</Text>
    <Picker
      style={styles.pick}
      mode="dropdown"
      selectedValue = {Skill} 
      onValueChange = {setSkill}>
        {SKILL?.data?.map((dropSkill,idx) => (
          <Picker.Item key={idx} label = {dropSkill} value = {dropSkill} />))}
    </Picker>
    </View>
    
    <View style={{flexDirection:'row',marginVertical:5,marginTop :5}}>
      <Text style={styles.heading}>Salary From</Text>
    <TextInput 
      style={styles.input}
      placeholder="From"
      placeholderTextColor="lightgrey"
      keyboardType="numeric"
      value={From}
      onChangeText={(Value)=>handleOnchangeText(Value,'From')} />
  </View>
  <View style={{flexDirection:'row',marginVertical:5}}>
      <Text style={styles.heading}>Salary To</Text>
  <TextInput 
    style={styles.input}
   placeholder="To"
   placeholderTextColor="lightgrey"
   keyboardType="numeric"
   value={To}
   onChangeText={(Value)=>handleOnchangeText(Value,'To')} />
   </View>
   
   <View style={{flexDirection:'row',marginVertical:4}}>
  <Text style={styles.heading}>Job Location</Text>
      <Picker
        style={styles.pick}
        mode="dropdown"
        selectedValue = {Location} 
        onValueChange = {setLocation}>
      {Loc?.data?.map((dropLoc,idx) => (
        <Picker.Item key={idx} label = {dropLoc} value = {dropLoc} />))}
      </Picker>
  </View>
  
  <View style={{flexDirection:'row',marginVertical:4}}>
  <Text style={styles.heading}>Qualification</Text> 
      <Picker
        style={styles.pick}
        mode="dropdown"
        selectedValue = {Qualification} 
        onValueChange = {setQualifiaction}>
        { Quali?.data?.map((dropQuali,idx) => (
        <Picker.Item key={idx} label = {dropQuali} value = {dropQuali} />))}
      </Picker>
  </View>
  <View style={{flexDirection:'row',marginVertical:4}}>
  <Text style={styles.heading}>Responiblities</Text>
      <TextInput 
      style={styles.input}
      placeholder="Responsiblities"
      placeholderTextColor="lightgrey"
      //keyboardType="numeric"
      value={Responsiblities}
      onChangeText={(Value)=>handleOnchangeText(Value,'Responsiblities')} />
</View>
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
    <Text></Text>
  <Text></Text>
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
        width : '75%',
        padding: 13,
        //marginVertical: 3,
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
        flex:1,
        //alignItems:'center',
        fontSize: 20,
        fontWeight:'bold',
        color: 'gray',
        marginTop :10,
        marginRight :10,
      },
      pick:{
        flex:1,
        //alignItems:'center',
        width :'50%',
        backgroundColor:"white",
        color:"black",
        marginRight :20,
        paddingRight :20,
      },
      input:{
        flex:1,
        backgroundColor: 'white',
        color:"black",
        width : '50%',
        borderColor: 'black',
        //borderColor: '#e8e8e8',
        borderWidth : 0.5,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginRight : 20
      }
})

export default JobDesc;