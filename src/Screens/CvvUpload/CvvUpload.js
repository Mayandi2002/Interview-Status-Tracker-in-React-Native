import React, { useState } from "react";
import {View  , Text , Button , ScrollView , Image, StyleSheet, TextInput, useWindowDimensions} from 'react-native';
//import Logo from '../../../assets/images/Logo';
import CustomInput from '../../componet/CustomInput/CustomInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import axios from "axios";

const CvvUpload = () => {
  
  const [Firstname,setFirstname] = useState('');
  const [Lastname,setLastname] = useState('');
  const [Email,setEmail ] = useState('');
  const [Mobileno,setMobileno]  = useState('');
  const [doorno,setdoorno] = useState('');
  const [Street,setStreet] = useState('');
  const [Pincode,setPincode] = useState('');
  const [city,setcity] = useState('');

  const [isPickerShow2, setIsPickerShow2] = useState(false);
  const [date2, setDate2] = useState(new Date(Date.now()));
  const [isPickerShow3, setIsPickerShow3] = useState(false);
  const [date3, setDate3] = useState(new Date(Date.now()));
  const [isPickerShow4, setIsPickerShow4] = useState(false);
  const [date4, setDate4] = useState(new Date(Date.now()));
  const [isPickerShow5, setIsPickerShow5] = useState(false);
  const [date5, setDate5] = useState(new Date(Date.now()));
  const [isPickerShow6, setIsPickerShow6] = useState(false);
  const [date6, setDate6] = useState(new Date(Date.now()));



  const [qualification,setqualification] = useState('');
  const [college,setcollege] = useState('');
  

  const [Currentcompany,setCurrentcompany] = useState('');
  const [RolesandResponsible,setRolesandResponsible] = useState('');
  const [Previouscompany1,setPreviouscompany1] = useState('');
  const [RolesandResponsible1,setRolesandResponsible1] = useState('');
  //const [Previouscompany2,setPreviouscompany2] = useState('');
  //const [RolesandResponsible2,setRolesandResponsible2] = useState('');


  const [TechSkill,setTechSkill] = useState('');
  const [Job,setJob] = useState('');
  const [Dob,setdob] = useState('');

  
  const showPicker2 = () => {
    setIsPickerShow2(true);
    };
  const showPicker3 = () => {
    setIsPickerShow3(true);
    };
  const showPicker4 = () => {
    setIsPickerShow4(true);
    };
  const showPicker5 = () => {
    setIsPickerShow5(true);
    };
  const showPicker6 = () => {
    setIsPickerShow6(true);
    };
  
  const onChange2 = (event, value) => {
    setDate2(value);
    if (Platform.OS === 'android') {
      setIsPickerShow2(false);
    }
  };
  const onChange3 = (event, value) => {
    setDate3(value);
    if (Platform.OS === 'android') {
      setIsPickerShow3(false);
    }
  };
  const onChange4 = (event, value) => {
    setDate4(value);
    if (Platform.OS === 'android') {
      setIsPickerShow4(false);
    }
  };
  const onChange5 = (event, value) => {
    setDate5(value);
    if (Platform.OS === 'android') {
      setIsPickerShow5(false);
    }
  };
  const onChange6 = (event, value) => {
    setDate6(value);
    if (Platform.OS === 'android') {
      setIsPickerShow6(false);
    }
  };
  
  {/*const ValidationEmail = (value) => {
    const regx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return regx.test(value)
  }*/}
 
  const onRegisterPressed = () => {
   {/* if(Firstname == "") {
      alert("please enter firstname")
      return true
    }
    
    else if(Lastname == "") {
      alert("please enter Lastname")
      return true
    }
    else if(Email == "") {
      alert("please enter email")
      return true 
    }
    else if(Mobileno == "") {
      alert("please enter Mobileno")
      return true
    }
   
    else if(!ValidationEmail(Email)) {
      alert ("Invalid Email format")
      return true
    }
    else if(Mobileno.length >10) {
      alert("Mobileno must 10 numbers")
      return true
    }
     
    else if(qualification == "") {
        alert("please enter qualificatin")
        return true
      }
      else if(college == "") {
        alert("please enter college")
        return true  
      }
  
      else if(RolesandResponsible == "") {
      alert("please enter Rolls and responsible")
      return true
    }
    
    else if(RolesandResponsible1 == "") {
      alert("please enter Rolls and responsible")
      return true
    }
    
    else if(TechSkill == "") {
      alert("please enter Technology Skill")
      return true
    }
    else if(Job == "") {
      alert("please enter Position Field")
      return true
    }*/}

  console.log('Connecting Api')
  axios.post('http://192.168.254.111:8080/candidate ', { 
		
    firstName: Firstname,
		lastName: Lastname,
		email: Email,
		phone: Mobileno,
    address: {
      doorNo: doorno,
      street: Street,
      pincode: Pincode,
      place: city,
    },
    company: [{
		  roll: RolesandResponsible,
		  name: Currentcompany,
		  from: date2,
		  to: date3,
    },
    {
      roll:RolesandResponsible1,
      name: Previouscompany1,
		  from: date4,
		  to: date5,
    }],
    qualification: [{
			collegeName :college,
			degree : qualification,
		}],
    job: Job,
		dob: date6,
		skill: [ 
      TechSkill,
    ]
    })
  
    .then(({data}) => {
		console.log(data)
    alert(data.msg)
    //alert(data.id)
	  })
  
    .catch(err => {
		console.log(err)
    alert(err)
	  })
    console.log(Dob)
  };

  
return (
  <ScrollView>
 <View style ={{alignItems: 'center', padding: 20, backgroundColor:"lightblue"}}>
 {/*<Image 
    source={Logo} 
    style={{width : '50%',
    maxWidth :200,
    maxHeight : 150,}} 
    resizeMode="contain" 
/>*/}

   <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 2,margin:5}}>Basic Information</Text>

<CustomInput
   placeholder="Firstname"
   placeholderTextColor="lightgrey"
   value={Firstname}
   setValue={setFirstname} />

<CustomInput
   placeholder="Lastname"
   placeholderTextColor="lightgrey"
   value={Lastname}
   setValue={setLastname} />
  
<CustomInput
  placeholder="Email"
  placeholderTextColor="lightgrey"
  value={Email}
  setValue={setEmail}
  keyboardType='email-address' />

<CustomInput
  placeholder="Mobileno"
  placeholderTextColor="lightgrey"
  value={Mobileno}
  setValue={setMobileno}
  keyboardType='number-pad' />

      
<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 10,margin:3}}>Address Information</Text>      
 
 <View style={{flex:1,flexDirection:'row'}}>
 <TextInput style={{
        backgroundColor: 'white',
        width : '25%',
        //borderColor: '#e8e8e8',
        color: "black",
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}} 
   placeholder="Door No"
   placeholderTextColor="lightgrey"
   value={doorno}
   onChangeText={setdoorno}
   keyboardType='number-pad' />   
   
   <TextInput style={{
        backgroundColor: 'white',
        color: "black",
        width : '75%',
        //borderColor: '#e8e8e8',
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}} 
   placeholder="Street/Area"
   placeholderTextColor="lightgrey"
   value={Street}
   onChangeText={setStreet} />
   </View>

   <View style={{flex:1,flexDirection:'row'}}>
<TextInput style={{
        backgroundColor: 'white',
        color:"black",
        width : '25%',
        //borderColor: '#e8e8e8',
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}} 
   placeholder="Pincode"
   placeholderTextColor="lightgrey"
   value={Pincode}
   onChangeText={setPincode}
   keyboardType='number-pad' />   
   
   <TextInput style={{
        backgroundColor: 'white',
        color:"black",
        width : '75%',
        //borderColor: '#e8e8e8',
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}} 
   placeholder = "City"
   placeholderTextColor="lightgrey"
   value={city}
   onChangeText={setcity} />
   </View>
   
  <Text style={{fontSize: 25, fontWeight:'bold', color: 'gray', padding: 10, margin:3}}>Qualification</Text>      
  <View style={{flex:1,flexDirection:'row'}}>
<TextInput style={{
        backgroundColor: 'white',
        color:"black",
        width : '25%',
        borderColor: '#e8e8e8',
        borderWidth : 1,
        borderColor:"black",
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}} 
   placeholder="Degree"
   placeholderTextColor="lightgrey"
   value={qualification}
   onChangeText={setqualification}
   //keyboardType='number-pad'
    />   

   <TextInput 
      style={{
        backgroundColor: 'white',
        color:"black",
        width : '75%',
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}} 
   placeholder = "College Name"
   placeholderTextColor="lightgrey"
   value={college}
    onChangeText={setcollege} 
   />
   </View>
  
    <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Experience Detail</Text>
  <TextInput style={{
        backgroundColor: 'white',
        color:"black",
        width : '100%',
        //borderColor: '#e8e8e8',
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}}
   placeholder="Company Name"
   placeholderTextColor="lightgrey"
   value={Currentcompany}
   onChangeText={setCurrentcompany} />

<TextInput style={{
        backgroundColor: 'white',
        color:"black",
        width : '100%',
        //borderColor: '#e8e8e8',
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}}
   placeholder="Role"
   placeholderTextColor="lightgrey"
   value={RolesandResponsible}
   onChangeText={setRolesandResponsible} />


{/*<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Previous Company1</Text>*/}
      
      <Text style={{fontSize: 20,color: 'blue',fontStyle: 'italic'}}>Starting Date</Text>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date2.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow2 && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="purple" onPress={showPicker2} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow2 && (
        <DateTimePicker
          value={date2}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange2}
          style={styles.datePicker}
        />
      )}
       <Text style={{fontSize: 20,color: 'blue',fontStyle: 'italic'}}>Ending Date</Text>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date3.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow3 && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="purple" onPress={showPicker3} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow3 && (
        <DateTimePicker
          value={date3}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange3}
          style={styles.datePicker}
        />
      )}

<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 10}}>Previous Company1</Text>
      <Text></Text>
      
  <TextInput style={{
        backgroundColor: 'white',
        color:"black",
        width : '100%',
        borderColor: 'black',
        //borderColor: '#e8e8e8',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}}
   placeholder="Company Name"
   placeholderTextColor="lightgrey"
   value={Previouscompany1}
   onChangeText={setPreviouscompany1} />

<TextInput style={{
        backgroundColor: 'white',
        color:"black",
        width : '100%',
        borderColor: 'black',
        //borderColor: '#e8e8e8',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5}}
   placeholder="Role"
   placeholderTextColor="lightgrey"
   value={RolesandResponsible1}
   onChangeText={setRolesandResponsible1} />

      <Text style={{fontSize: 20,color: 'blue',fontStyle: 'italic'}}>Starting Date</Text>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date4.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow4 && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="purple" onPress={showPicker4} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow4 && (
        <DateTimePicker
          value={date4}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange4}
          style={styles.datePicker}
        />
      )}
       <Text style={{fontSize: 20,color: 'blue',fontStyle: 'italic'}}>Ending Date</Text>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date5.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow5 && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="purple" onPress={showPicker5} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow5 && (
        <DateTimePicker
          value={date5}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange5}
          style={styles.datePicker}
        />

        
      )
      
      }

{/*<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Skills</Text>*/}
       <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Technology Skills</Text>
       <CustomInput
   placeholder="Technology Skill"
   placeholderTextColor="lightgrey"
   value={TechSkill}
   setValue={setTechSkill} />

<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Apply Job Position</Text>
  
 {/* <CustomInput
   placeholder="Job"
   placeholderTextColor="lightgrey"
   value={Job}
   setValue={setJob} />
    */}
  
    <Picker
    style={{alignItems:'center',width :'100%',backgroundColor:"white",color:"black"}}
    selectedValue = {Job} onValueChange = {setJob}>
            <Picker.Item label = "React" value = "react" />
            <Picker.Item label = "Native" value = "native" />
            <Picker.Item label = "Springboot" value = "spring" />
            <Picker.Item label = "AWS" value = "aws" />
         </Picker>
         
         
<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Date of Birth</Text>
<CustomInput
   placeholder="Date of Birth"
   placeholderTextColor="lightgrey"
   value={Dob}
   setValue={setdob} />
  
   <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date6.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow6 && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="purple" onPress={showPicker6} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow6 && (
        <DateTimePicker
          value={date6}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange6}
          style={styles.datePicker}
        />
      )}

<Text></Text>
<Text></Text>
   <Button title="Register Candidate"
   onPress={onRegisterPressed} />
   

<Text></Text>
<Text></Text>

{/*<Button title="Add Profile"
   onPress={onAddProfilePressed}/>
  */} 
 </View>
 </ScrollView>
);
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor:"lightblue",
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',

  },
  btnContainer: {
    padding: 10,
  },
  // This only works on iOS
  datePicker: {
    width : 320,
    height : 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default CvvUpload;