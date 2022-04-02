import React, { useState } from "react";
import {View  , Text , Button , ScrollView , Image, StyleSheet, useWindowDimensions} from 'react-native';
//import Logo from '../../../assets/images/Logo';
import CustomInput from '../../componet/CustomInput/CustomInput';
import DateTimePicker from '@react-native-community/datetimepicker';

const CvvUpload =() => {
  const [Firstname,setFirstname] = useState('');
  const [Lastname,setLastname] = useState('');
  const [Email,setEmail ] = useState('');
  const [Mobileno,setMobileno]  = useState('');
  const [Phoneno,setPhoneno] = useState('');
  const [Linkdln,setLinkdln] = useState('');


  const [Ressidental,setRessidental] = useState('');
  const [Permanent,setPermanent] = useState('');


  const [isPickerShow2, setIsPickerShow2] = useState(false);
  const [date2, setDate2] = useState(new Date(Date.now()));
  const [isPickerShow3, setIsPickerShow3] = useState(false);
  const [date3, setDate3] = useState(new Date(Date.now()));
  const [isPickerShow4, setIsPickerShow4] = useState(false);
  const [date4, setDate4] = useState(new Date(Date.now()));
  const [isPickerShow5, setIsPickerShow5] = useState(false);
  const [date5, setDate5] = useState(new Date(Date.now()));



  const [qualification,setqualification] = useState('');
  const [college,setcollege] = useState('');
  

  const [Currentcompany,setCurrentcompany] = useState('');
  const [RolesandResponsible,setRolesandResponsible] = useState('');
  const [Previouscompany1,setPreviouscompany1] = useState('');
  const [RolesandResponsible1,setRolesandResponsible1] = useState('');
  const [Previouscompany2,setPreviouscompany2] = useState('');
  const [RolesandResponsible2,setRolesandResponsible2] = useState('');


  const [TechSkill,setTechSkill] = useState('');
  const [Position,setPosition] = useState('');

  
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
  

  const ValidationEmail = (value) => {
    const regx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return regx.test(value)
  }
 
  const onRegisterPressed = () => {
    if(Firstname == "") {
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
    else if(Phoneno == "") {
      alert("please enter phoneno")
      return true   
    }
    else if(Linkdln == "") {
      alert("please enter Linkdln")
      return true   
    }
    else if(Firstname.length >9) {
      alert("Firstname allowed maximum 9 characters")
      return true
    }
    else if(Lastname.length >9) {
      alert("Firstname allowed maximum 9 characters")
      return true
    }
    else if(!ValidationEmail(Email)) {
      alert ("Invalid Email format")
      return true
    }
    else if(Mobileno.length = 10) {
      alert("Mobileno must 10 numbers")
      return true
    }
    else if(Phoneno.length = 10) {
      alert("Phoneno must 10 numbers")
      return true
    }

    //
    else if(Ressidental == "") {
      alert("please enter Ressidental")
      return true
    }
    else if(Permanent == "") {
      alert("please enter Permanent")
      return true  
    }
    //

    else if(qualification == "") {
        alert("please enter qualificatin")
        return true
      }
      else if(college == "") {
        alert("please enter college")
        return true  
      }
  

    //
    else if(RolesandResponsible == "") {
      alert("please enter Rolls and responsible")
      return true
    }
    
    else if(RolesandResponsible1 == "") {
      alert("please enter Rolls and responsible")
      return true
    }
    
    else if(RolesandResponsible2 == "") {
      alert("please enter Rolls and responsible")
      return true
    }

    //
    else if(TechSkill == "") {
      alert("please enter Technology Skill")
      return true
    }
    else if(Position == "") {
      alert("please enter Position Field")
      return true
    }
  }

  const onAddProfilePressed = () => {
    //MyStack.navigate('info1');
    alert("Profile is Added");
  };

return (
  <ScrollView>
 <View style ={{alignItems: 'center',padding: 25,}}>
 {/*<Image 
    source={Logo} 
    style={{width : '50%',
    maxWidth :200,
    maxHeight : 150,}} 
    resizeMode="contain" 
/>*/}
   <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Resume Upload</Text>
   <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Basic Information</Text>
      <CustomInput
   placeholder="Firstname"
   value={Firstname}
   setValue={setFirstname} />

<CustomInput
   placeholder="Lastname"
   value={Lastname}
   setValue={setLastname} />
  
  <CustomInput
   placeholder="Email"
   value={Email}
   setValue={setEmail} />

   <CustomInput
     placeholder="Mobileno"
     value={Mobileno}
     setValue={setMobileno}
    
     />

<CustomInput
     placeholder="Phoneno"
     value={Phoneno}
     setValue={setPhoneno}
     />

<CustomInput
     placeholder="Linkdln"
     value={Linkdln}
     setValue={setLinkdln}
     />

      
<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Address Information</Text>      
 <CustomInput 
   placeholder="Ressidental"
   value={Ressidental}
   setValue={setRessidental} />
    <CustomInput
   placeholder="Permanent"
   value={Permanent}
   setValue={setPermanent} />
   
  <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Educationl Detail</Text>      
 <CustomInput 
   placeholder="qualification"
   value={qualification}
   setValue={setqualification} />
    <CustomInput
   placeholder="college name"
   value={college}
   setValue={setcollege} />



   <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Experience Detail</Text>
       <CustomInput
   placeholder="Currentcompany"
   value={Currentcompany}
   setValue={setCurrentcompany} />

<CustomInput
   placeholder="Roles and Responsible"
   value={RolesandResponsible}
   setValue={setRolesandResponsible} />


<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Previous Company1</Text>
      <Text></Text>
      <Text style={{fontSize: 25,color: 'lightblue',fontStyle: 'italic'}}>Starting Date</Text>
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
       <Text style={{fontSize: 25,color: 'lightblue',fontStyle: 'italic'}}>Ending Date</Text>
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

<CustomInput
   placeholder="Roles and Responsible"
   value={RolesandResponsible1}
   setValue={setRolesandResponsible1} />



<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Previous Company2</Text>
      <Text></Text>
      <Text style={{fontSize: 25,color: 'lightblue',fontStyle: 'italic'}}>Starting Date</Text>
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
       <Text style={{fontSize: 25,color: 'lightblue',fontStyle: 'italic'}}>Ending Date</Text>
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

<CustomInput
   placeholder="Roles and Responsible"
   value={RolesandResponsible2}
   setValue={setRolesandResponsible2} />
 <Text></Text>
<Button title="AddPrevious Company"
   onPress={() => alert(" New Page Opened")}/> 

<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Skills</Text>
       <Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Technology Skills</Text>
       <CustomInput
   placeholder="Technology Skill"
   value={TechSkill}
   setValue={setTechSkill} />
<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Apply Position to</Text>

<CustomInput
   placeholder="Position"
   value={Position}
   setValue={setPosition} />
<Text></Text>
<Text></Text>
   <Button title="Resume Upload"
   onPress={onRegisterPressed} />

<Text></Text>
<Text></Text>

<Button title="Add Profile"
   onPress={onAddProfilePressed}/> 
 </View>
 </ScrollView>
);
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',

  },
  btnContainer: {
    padding: 30,
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