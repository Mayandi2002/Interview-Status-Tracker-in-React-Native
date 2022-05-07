	import React, { useState } from "react";
	import {View  , Text , Button , Pressable , ScrollView , Image, StyleSheet, TextInput, useWindowDimensions} from 'react-native';
	//import Logo from '../../../assets/images/Logo';
	import CustomInput from '../../componet/CustomInput/CustomInput';
	import DateTimePicker from '@react-native-community/datetimepicker';
	import {Picker} from '@react-native-picker/picker';
	import axios from "axios";
	import Icon from 'react-native-vector-icons/FontAwesome';

	const CvvUpload = () => {

	const[Form,SetForm] = useState({
		Firstname:'',
		Lastname:'',
		Email:'',
		Mobileno:'',
		doorno:'',
		Street:'',
		Pincode:'',
		city:'',
		Currentcompany:'',
		RolesandResponsible:'',
		Previouscompany1:'',
		RolesandResponsible1:'',
		TechSkill:'',
	});

	const[qualification,setqualification] = useState([])
	const[college,setcollege] = useState([])
	//console.log(college)

	const[components,setComponents] = useState([1])

	const[Err,setErr] = useState('');
	const[FnameErr,setFnameErr] = useState('');
	const[LnameErr,setLnameErr] = useState('');
	const[EmailErr,setEmailErr] = useState('');

	const{Firstname,Lastname,Email,Mobileno,
		doorno,Street,Pincode,city,
		
		Currentcompany,RolesandResponsible,
		Previouscompany1,RolesandResponsible1,
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
		updateError('Require All Fields',setErr);
		return true; 
		}
	if(!ValidationEmail(Email)) {
		updateError('Invalid Email',setEmailErr);
		return true;
	}
	if(!Firstname.trim() || Firstname.length > 25) {
		updateError('Firstname is Allow only 25 Characters',setFnameErr);
		return true;
	}
	if(!Lastname.trim() || Lastname.length > 25) {
		updateError('Lastname is Allow only 25 Characters',setLnameErr);
		return true;
	}
	};

	//const [Firstname,setFirstname] = useState('');
	//const [Lastname,setLastname] = useState('');
	//const [Email,setEmail ] = useState('');
	//const [Mobileno,setMobileno]  = useState('');
	//const [doorno,setdoorno] = useState('');
	//const [Street,setStreet] = useState('');
	//const [Pincode,setPincode] = useState('');
	//const [city,setcity] = useState('');

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



	//const [qualification,setqualification] = useState('');
	//const [college,setcollege] = useState('');


	//const [Currentcompany,setCurrentcompany] = useState('');
	//const [RolesandResponsible,setRolesandResponsible] = useState('');
	//const [Previouscompany1,setPreviouscompany1] = useState('');
	//const [RolesandResponsible1,setRolesandResponsible1] = useState('');
	//const [Previouscompany2,setPreviouscompany2] = useState('');
	//const [RolesandResponsible2,setRolesandResponsible2] = useState('');


	//const [TechSkill,setTechSkill] = useState('');
	const [Job,setJob] = useState('');
	//const [Dob,setdob] = useState('');


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
	
		if(!isValid()) {
		
	console.log('Connecting Api')
	axios.post('http://192.168.28.111:8080/candidate ', { 
		
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

	.catch(({response}) => {
		console.log(response.data)
	alert(response.data.error)
		})
	//console.log(Dob)
	}
	};

	const renderQualificationForm = () => {
		setComponents([...components, 1])
	}
	const deletequalificationform = () => {
	const _inputs = components.filter((value,index) => index != 1);
	setComponents(_inputs);
	}


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

	<View style={{flexDirection:'row',marginTop :5}}>

	<Text style={{fontSize: 18,fontWeight:'bold',color: 'grey', padding:5}}>DOB</Text>
	{/*<CustomInput
	placeholder="Date of Birth"
	placeholderTextColor="lightgrey"
	value={Dob}
	setValue={setdob} />*/}

	<View style={styles.pickedDateContainer}>
		<Text style={styles.pickedDate}>{date6.toUTCString()}</Text>
		</View>

		{/* The button that used to trigger the date picker */}
		{!isPickerShow6 && (
		<View style={styles.btnContainer}>
			{/*<Pressable title="Show Picker" color="purple" onPress={showPicker6} />*/}
			{/*<Pressable
			onPress={showPicker6}
			style={({ pressed }) => [{ 
			opacity: pressed ? 0.8 : 1.0 },styles.dateBtn]} ><Text style={{color:"white"}}>Select Date</Text></Pressable>*/}
			<Icon name="calendar" size={25} color="blue"
			onPress={showPicker6}
			style={({pressed}) => [{
			opacity:pressed ? 0.2 : 1.0 }]} />      
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
		</View>


		
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
	onChangeText={(value)=>handleOnchangeText(value,'doorno')}
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
	onChangeText={(value)=>handleOnchangeText(value,'Street')} />
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
	onChangeText={(value)=>handleOnchangeText(value,'Pincode')}
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
	onChangeText={(value)=>handleOnchangeText(value,'city')} />
	</View>

	<Text style={{fontSize: 25, fontWeight:'bold', color: 'gray', padding: 10, margin:3}}>Qualification</Text>      
	{components.map((value,index) =>
	<View style={{flex:1,flexDirection:'row'}}
	key={index} >
		<TextInput 
			style={{
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
			value={value.qualification}
			onChangeText={setqualification}
		//keyboardType='number-pad'
			/>   

			<TextInput style={{
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
			value={value.college}
			onChangeText={setcollege} 
			/>
		</View>)}
	<View style={{flex:1,flexDirection:'row',marginRight :210}}>
	<Pressable
	style={{backgroundColor:"blue",padding:10,borderRadius:7}}
	onPress={renderQualificationForm}>
		<Text 
		style={{alignItems:'center',color:"white",fontWeight:"bold"}}>Add</Text>
	</Pressable>
	<Pressable
	style={{backgroundColor:"red",padding:10,marginLeft :7,borderRadius:7}}
	onPress={deletequalificationform}>
		<Text style={{alignItems:'center',color:"white",fontWeight:"bold"}}>Clear</Text>
	</Pressable>
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
	onChangeText={(value)=>handleOnchangeText(value,'Currentcompany')} />

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
	onChangeText={(value)=>handleOnchangeText(value,'RolesandResponsible')} />


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
	onChangeText={(value)=>handleOnchangeText(value,'Previouscompany1')} />

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
	onChangeText={(value)=>handleOnchangeText(value,'RolesandResponsible1')} />

		<Text style={{fontSize: 20,color: 'blue',fontWeight:'bold'}}>Starting Date</Text>
		{/* Display the selected date */}
		<View style={{flexDirection:'row'}}>
		<View style={styles.pickedDateContainer}>
		<Text style={styles.pickedDate}>{date4.toUTCString()}</Text>
		</View>

		{/* The button that used to trigger the date picker */}
		{!isPickerShow4 && (
		<View style={styles.btnContainer}>
			<Pressable
			onPress={showPicker6}
			style={({ pressed }) => [{ 
			opacity: pressed ? 0.8 : 1.0 },styles.dateBtn]} ><Text style={{color:"white"}}>Select Date</Text></Pressable>
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
		</View>
		<Text style={{fontSize: 20,color: 'blue',fontWeight:'bold'}}>Ending Date</Text>
		{/* Display the selected date */}
		<View style={{flexDirection:'row'}}>
		<View style={styles.pickedDateContainer}>
		<Text style={styles.pickedDate}>{date5.toUTCString()}</Text>
		</View>

		{/* The button that used to trigger the date picker */}
		{!isPickerShow5 && (
		<View style={styles.btnContainer}>
			<Pressable
			onPress={showPicker6}
			style={({ pressed }) => [{ 
			opacity: pressed ? 0.8 : 1.0 },styles.dateBtn]} ><Text style={{color:"white"}}>Select Date</Text></Pressable>
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
		)}
		</View>

	{/*<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Skills</Text>*/}
		<Text style={{fontSize: 25,fontWeight:'bold',color: 'gray', padding: 20}}>Technology Skills</Text>
		<CustomInput
		placeholder="Technology Skill"
		placeholderTextColor="lightgrey"
		value={TechSkill}
		setValue={(value)=>handleOnchangeText(value,'TechSkill')} />

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
			
			

	<Text></Text>
	<Text></Text>
	{Err ? <Text style={{color:"red",fontWeight:'bold'}}>{Err}</Text>:null}
	{FnameErr ? <Text style={{color:"red",fontWeight:'bold'}}>{FnameErr}</Text>:null}
	{LnameErr ? <Text style={{color:"red",fontWeight:'bold'}}>{LnameErr}</Text>:null}
	{EmailErr ? <Text style={{color:"red",fontWeight:'bold'}}>{EmailErr}</Text>:null}
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
	title: {
	fontSize: 25,
	fontWeight:'300',
	color: 'black',
	padding: 20
	},
	pickedDateContainer: {
	padding: 5,
	backgroundColor: 'white',
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
	borderRadius:7
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