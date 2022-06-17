import React, { useState, useEffect } from "react";
import { View  , Text , Button , Pressable , ScrollView ,
   		  StyleSheet, TextInput, useWindowDimensions} from 'react-native';
import CustomInput from "../../../componet/CustomInput/CustomInput";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
import { Card } from 'react-native-paper';

const UpdateEmp = ({route,navigation}) => {

const[Form,SetForm] = useState({
  Id: route.params.data.data?.id,
  Firstname: route.params.data.data?.firstName,
  Lastname: route.params.data.data?.lastName,
  Email: route.params.data.data?.email,
  Mobileno:'',
  Username: route.params.data.data?.userName,
  Password:'',
  doorno:route.params.data.data?.address?.doorNo,
  Street:route.params.data.data?.address?.street,
  Pincode:'',
  city:route.params.data.data?.address?.place,
  Currentcompany:'',
  RolesandResponsible:'',
  Previouscompany1:'',
  RolesandResponsible1:'',
  TechSkill:'',
});

const[Gender,setGender] = useState(route.params.data.data?.gender)
const[Dept,setDept] = useState(route.params.data.data?.department)
const[qualification,setqualification] = useState([])
const[college,setcollege] = useState([])
const[Role,setRole] = useState('')
const[components,setComponents] = useState([1])

const[Err,setErr] = useState('');
const[FnameErr,setFnameErr] = useState('');
const[LnameErr,setLnameErr] = useState('');
const[EmailErr,setEmailErr] = useState('');

const{ Id,Firstname,Lastname,Email,Mobileno,Username,Password,doorno,Street,Pincode,city,
  Currentcompany,RolesandResponsible,Previouscompany1,RolesandResponsible1,
  TechSkill} = Form

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

const ValidationEmail = (value) => {
const regx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
return regx.test(value)
}

const isValid = () => {
if(!isValidObjField(Form)) {
  updateError('Require All Fields !!!',setErr);
  return true; 
  }
if(!ValidationEmail(Email)) {
  updateError('Invalid Email',setEmailErr);
  return true;
}
if(!Mobileno.trim() || Mobileno.length < 10 || Mobileno.length > 10) {
  updateError('Mobile No is allow only 10 Digits',setFnameErr);
  return true;
}
if(!Pincode.trim() || Pincode.length < 6 || Pincode.length > 6) {
  updateError('Pincode is Allow only 6 Digits',setLnameErr);
  return true;
}
};

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

const onRegisterPressed = () => {
  console.log(Form)
  if(!isValid()) {
  console.log('Connecting Api')
  axios.post('http://192.168.1.3:8080/employee ', { 
  id: Id,
  firstName: Firstname,
  lastName: Lastname,
  email: Email,
  phone: Mobileno,
  userName: Username,
  password: Password,
  gender: Gender,
  department:Dept,
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
    roll: RolesandResponsible1,
    name: Previouscompany1,
    from: date4,
    to: date5,
  }],
  degree: [{
    collegeName: college,
    degree: qualification,
  }],
  role: [Role],
  dob: date6,
  skill: [ 
      TechSkill,
    ]
  })
  .then(({data}) => {
    console.log(data)
    alert(data.msg)
  })
  .catch(({response}) => {
    console.log(response.data)
    alert(response.data.msg)
  })
  }
  };

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

  const renderQualificationForm = () => {
    setComponents([...components,''])
  }
  const deletequalificationform = (index) => {
    const _inputs = components.splice((index,1));
    setComponents(_inputs);
  }
  
  {/*const handleDegree = (q,index) => {
    qualification[index] = q.currentTarget;
    //components[index] = c.currentTarget;
    setqualification([qualification]);
  };
  const handleCollege = (c, index) => {
    college[index] = c.currentTarget;
    //components[index] = c.currentTarget;
    setcollege([college]);
  };*/}
  //console.log(Role)
//console.log(route.params.data.data?.phone)
return (
  <View style={{flex:1,backgroundColor:'lightblue'}}>
    <Card style={styles.card}>
      <View style={{flexDirection:'row'}}>
      <Pressable 
        style = {({ pressed }) => [{ 
        opacity: pressed ? 0.5 : 1.0 },styles.savebtn]}
        onPress={onRegisterPressed} >
          <Icon name="check" color="white" />
          <Text style={{color:"white",fontSize:16,fontWeight:'bold'}}>Save</Text>
      </Pressable>
      <Pressable 
        style={({ pressed }) => [{ 
        opacity: pressed ? 0.5 : 1.0 },styles.cancelbtn]}
        onPress={()=>{navigation.navigate('EmpView')}} >
          <Icon name="remove" color="white" />
          <Text style={{color:"white",fontSize:16,fontWeight:'bold'}}>Cancel</Text>
      </Pressable>
      </View>
      {Err ? <Text style={{color:"white",fontWeight:'bold',marginLeft :115}}>{Err}</Text>:null}
    </Card>
<ScrollView>
<View style ={styles.container}>
  <Text style={styles.heading}>Basic Information</Text>

  <CustomInput
    placeholder="ID"
    placeholderTextColor="lightgrey"
    Value={Id}
    editable={false}
    setValue={(value) => handleOnchangeText(value,'Id')} />

  <CustomInput
    placeholder="Firstname"
    placeholderTextColor="lightgrey"
    Value={Firstname}
    setValue={(value) => handleOnchangeText(value,'Firstname')} />

  <CustomInput
    placeholder="Lastname"
    placeholderTextColor="lightgrey"
    Value={Lastname}
    setValue={(value)=>handleOnchangeText(value,'Lastname')} />

  <CustomInput
    placeholder="Email"
    placeholderTextColor="lightgrey"
    Value={Email}
    setValue={(value)=>handleOnchangeText(value,'Email')}
    keyboardType='email-address'
    autoCapitalize='none' />
  {EmailErr ? <Text style={{color:"red",fontWeight:'bold'}}>{EmailErr}</Text>:null}

  <CustomInput
    placeholder="Mobileno"
    placeholderTextColor="lightgrey"
    Value={Mobileno}
    setValue={(value)=>handleOnchangeText(value,'Mobileno')}
    keyboardType='number-pad' />
{FnameErr ? <Text style={{color:"red",fontWeight:'bold'}}>{FnameErr}</Text>:null}
  <CustomInput
    placeholder="Username"
    placeholderTextColor="lightgrey"
    Value={Username}
    setValue={(value)=>handleOnchangeText(value,'Username')} />

  <CustomInput
    placeholder="Password"
    placeholderTextColor="lightgrey"
    value={Password}
    setValue={(value)=>handleOnchangeText(value,'Password')} />
  
  <View style={{flexDirection:'row',marginVertical:5}}>
  <Picker
    mode="dropdown"
    style={{
      flex:1,
      width :'45%',
      backgroundColor:"white",
      color:"black",
      marginRight :5,
      //paddingHorizontal:10
    }}
    selectedValue = {Gender} 
    onValueChange = {setGender}>
    <Picker.Item label = "<Gender>" />
    <Picker.Item label = "Male" value = "Male" />
    <Picker.Item label = "Female" value = "Female" />
    <Picker.Item label = "Others" value = "others" />
  </Picker> 
  <Picker
    mode="dropdown"
    style={{
      //alignItems:'center',
      flex:1,
      width :'50%',
      backgroundColor:"white",
      color:"black",
      paddingHorizontal:10
    }}
    selectedValue = {Dept} 
    onValueChange = {setDept}>
    <Picker.Item label = "<Dept>" />
    <Picker.Item label = "Mobile" value = "Mobile" />
    <Picker.Item label = "Website" value = "Website" />
    <Picker.Item label = "API" value = "Api" />
    <Picker.Item label = "Devops" value = "Devops" />
  </Picker>
  </View> 

  <Text style={{fontSize: 16,fontWeight:'bold',color:'grey'}}>Date of Birth</Text>
  <View style={{flexDirection:'row'}}>
<View style={styles.pickedDateContainer}>
  <Text style={styles.pickedDate}>{date6.toUTCString()}</Text>
</View>

  {/* The button that used to trigger the date picker */}
  {!isPickerShow6 && (
  <View style={styles.btnContainer}>
    <Icon 
      name="calendar" 
      color="blue" 
      size={30} 
      onPress={showPicker6} 
      style={{paddingTop :5}} />     
  </View>
  )}
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
  </View>
  <Text style={styles.heading}>Address Information</Text>      

<View style={{flex:1,flexDirection:'row'}}>
<TextInput 
  style={styles.LeftInput} 
  placeholder="Door No"
  placeholderTextColor="lightgrey"
  value={doorno}
  onChangeText={(value)=>handleOnchangeText(value,'doorno')}
  keyboardType='number-pad' />   

<TextInput 
  style={styles.RightInput} 
  placeholder="Street/Area"
  placeholderTextColor="lightgrey"
  value={Street}
  onChangeText={(value)=>handleOnchangeText(value,'Street')} />
</View>

<View style={{flex:1,flexDirection:'row'}}>
<TextInput 
  style={styles.LeftInput} 
  placeholder="Pincode"
  placeholderTextColor="lightgrey"
  value={Pincode}
  onChangeText={(value)=>handleOnchangeText(value,'Pincode')}
  keyboardType='number-pad' />   

<TextInput 
  style={styles.RightInput} 
  placeholder = "City"
  placeholderTextColor="lightgrey"
  value={city}
  onChangeText={(value)=>handleOnchangeText(value,'city')} />
</View>
{LnameErr ? <Text style={{color:"red",fontWeight:'bold'}}>{LnameErr}</Text>:null}
<Text style={styles.heading}>Qualification</Text>      
{components.map((value,index) =>
<View 
  style={{flex:1,flexDirection:'row'}}
  key={index}>
  <TextInput 
    style={styles.LeftInput} 
    placeholder = "Degree"
    placeholderTextColor="lightgrey"
    value={value.qualification}
    onChangeText={setqualification} />   
  <TextInput 
    style={styles.RightInput} 
    placeholder = "College Name"
    placeholderTextColor="lightgrey"
    value={value.college}
    onChangeText={setcollege} />
  </View>)}
<View style={{flex:1,flexDirection:'row',marginRight :210}}>
  <Pressable
    style={{backgroundColor:"blue",padding:10,borderRadius:7}}
    onPress={renderQualificationForm}>
  <Text style={{alignItems:'center',color:"white",fontWeight:"bold"}}>Add</Text>
  </Pressable>
  <Pressable
    style={{backgroundColor:"mediumblue",padding:10,marginLeft :7,borderRadius:7}}
    onPress={deletequalificationform}>
  <Text style={{alignItems:'center',color:"white",fontWeight:"bold"}}>Clear</Text>
  </Pressable>
</View>

  <Text style={styles.heading}>Experience Detail</Text>
  <CustomInput
    placeholder="Company Name"
    placeholderTextColor="lightgrey"
    value={Currentcompany}
    setValue={(value)=>handleOnchangeText(value,'Currentcompany')} />
  <CustomInput 
    placeholder="Role"
    placeholderTextColor="lightgrey"
    value={RolesandResponsible}
    setValue={(value)=>handleOnchangeText(value,'RolesandResponsible')} />
  
  <Text style={{fontSize:16,fontWeight:'bold',color:'grey'}}>Starting Date</Text>
  {/* Display the selected date */}
  <View style={{flexDirection:'row'}}>
  <View style={styles.pickedDateContainer}>
    <Text style={styles.pickedDate}>{date2.toUTCString()}</Text>
  </View>
  {!isPickerShow2 && (
  <View style={styles.btnContainer}>
    <Icon 
      name="calendar" 
      color="blue" 
      size={30} 
      onPress={showPicker2} 
      style={{paddingTop :5}} />
  </View>)}
  {isPickerShow2 && (
  <DateTimePicker
    value={date2}
    mode={'date'}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onChange2}
    style={styles.datePicker} />)}
  </View>
  <Text style={{fontSize:16,fontWeight:'bold',color:'grey'}}>Ending Date</Text>
  {/* Display the selected date */}
<View style={{flexDirection:'row'}}>
  <View style={styles.pickedDateContainer}>
    <Text style={styles.pickedDate}>{date3.toUTCString()}</Text>
  </View>

  {!isPickerShow3 && (
  <View style={styles.btnContainer}>
    <Icon 
      name="calendar" 
      color="blue" 
      size={30} 
      onPress={showPicker3} 
      style={{paddingTop :5}} />
  </View>)}
  {isPickerShow3 && (
  <DateTimePicker
    value={date3}
    mode={'date'}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onChange3}
    style={styles.datePicker} />)}
</View>
          <Text></Text>
  <Text style={styles.heading}>Previous Company</Text>
  
  <CustomInput
    placeholder="Company Name"
    placeholderTextColor="lightgrey"
    value={Previouscompany1}
    setValue={(value)=>handleOnchangeText(value,'Previouscompany1')} />
  <CustomInput
    placeholder="Role"
    placeholderTextColor="lightgrey"
    value={RolesandResponsible1}
    setValue={(value)=>handleOnchangeText(value,'RolesandResponsible1')} />

  <Text style={{fontSize: 16,fontWeight:'bold',color: 'grey'}}>Starting Date</Text>
  {/* Display the selected date */}
<View style={{flexDirection:'row'}}>
  <View style={styles.pickedDateContainer}>
    <Text style={styles.pickedDate}>{date4.toUTCString()}</Text>
  </View>
  {!isPickerShow4 && (
  <View style={styles.btnContainer}>
    <Icon 
      name="calendar" 
      color="blue" 
      size={30} 
      onPress={showPicker4} 
      style={{paddingTop :5}} />
  </View>)}
  {isPickerShow4 && (
  <DateTimePicker
    value={date4}
    mode={'date'}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onChange4}
    style={styles.datePicker}/>)}
</View>
  <Text style={{fontSize: 16,fontWeight:'bold',color: 'grey'}}>Ending Date</Text>
  {/* Display the selected date */}
<View style={{flexDirection:'row'}}>
  <View style={styles.pickedDateContainer}>
    <Text style={styles.pickedDate}>{date5.toUTCString()}</Text>
  </View>
  
  {!isPickerShow5 && (
  <View style={styles.btnContainer}>
    <Icon 
      name="calendar" 
      color="blue" 
      size={30} 
      onPress={showPicker5} 
      style={{paddingTop :5}} />
  </View>)}
  {isPickerShow5 && (
  <DateTimePicker
    value={date5}
    mode={'date'}
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    is24Hour={true}
    onChange={onChange5}
    style={styles.datePicker}/>)}
</View>
        <Text></Text>
  <Text style={styles.heading}>Technology Skills</Text>
  <CustomInput
    placeholder="Technology Skill"
    placeholderTextColor="lightgrey"
    value={TechSkill}
    setValue={(value)=>handleOnchangeText(value,'TechSkill')} />

<Text style={styles.heading}>Apply Job Position</Text>

  <Picker
    mode="dropdown"
    style={{
      alignItems:'center',
      width :'100%',
      backgroundColor:"white",
      color:"black"}}
    selectedValue = {Role} 
    onValueChange = {setRole}>
      <Picker.Item label="<Role>" />
    {Drop?.data?.map((dropdata,idx) => (
        <Picker.Item 
        key={idx}
        label = {dropdata} 
        value = {dropdata} />))}
  </Picker>

  <Text></Text>
  
</View>
</ScrollView>
</View>
);
};

const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  padding: 20,
  marginTop :-15,
  backgroundColor:"lightblue"
},
card: {
  padding:2,
  paddingTop :5,
  paddingBottom :5,
  marginVertical:2,
  marginHorizontal:3,
  backgroundColor:"blue",
  borderRadius:7,
  borderStyle:'solid',
  borderWidth :0.5
},
heading: {
  fontSize: 20,
  fontWeight:'bold',
  color: 'gray',
  padding: 2,
  //margin:2
},
savebtn: {
flex:1,
alignItems:'center',
marginRight :10
},
cancelbtn: {
flex:1,
alignItems:'center',
marginLeft :10
},
LeftInput: {
  backgroundColor: 'white',
  width : '25%',
  //borderColor: '#e8e8e8',
  color: "black",
  borderColor: 'black',
  borderWidth : 0.5,
  borderRadius: 7,
  paddingHorizontal: 10,
  marginHorizontal: 3,
  marginVertical: 5
},
RightInput: {
  backgroundColor: 'white',
  color: "black",
  width : '75%',
  //borderColor: '#e8e8e8',
  borderColor: 'black',
  borderWidth : 0.5,
  borderRadius: 7,
  paddingHorizontal: 10,
  marginVertical: 5
},
pickedDateContainer: {
  padding: 11.5,
  paddingLeft :15,
  paddingRight :18,
  backgroundColor: 'white',
  borderColor:"black",
  borderWidth :0.5,
  borderRadius: 7,
},
pickedDate: {
  fontSize: 18,
  color: 'black',
//backgroundColor:"white"
},
btnContainer: {
  marginHorizontal:5,
  padding: 2,
},
dateBtn: {
  backgroundColor:"blue",
  padding:8,
  borderRadius:3
},
datePicker: {
  width : 320,
  height : 260,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
},
button:{
  backgroundColor: 'blue', 
  alignItems:"center", 
  width : '75%',
  padding: 15,
  marginVertical: 10,
  alignItems: 'center',
  borderRadius: 5,
  borderWidth : 0.5,}
});

export default UpdateEmp;