import React,{useState,useEffect} from 'react';
import { Text, StyleSheet, View, Pressable,ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EmpView2 = ({route}) => {
  //console.log(route.params.data.id);

  const MyStack = useNavigation();

  const [cards,setCards] = useState([])
  
  useEffect(()=>{
  axios.get(`http://192.168.92.111:8080/employee/${route.params.data.id}`)
  .then(({data}) => {
    console.log(data)
    //alert(data.msg)
    setCards(data)
  })
  .catch(({response}) => {
    console.log(response)
  })
}, [])

//console.log(cards?.data?.id)

  return(
    <ScrollView style={styles.container}>
    
    <Card
    style={styles.card}>
        <Text style={styles.heading}>Basic Information</Text>          
      <View style={styles.cardview}>      
        <Text style={styles.text}>First Name</Text>
        <Text style={styles.data}>     {cards?.data?.firstName}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Last Name</Text>
        <Text style={styles.data}>     {cards?.data?.lastName}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Email</Text>
        <Text style={styles.data}>               {cards?.data?.email}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Mobile No</Text>
        <Text style={styles.data}>     {cards?.data?.phone}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>DOB</Text>
        <Text style={styles.data}>                {cards?.data?.dob}</Text> 
      </View>
    </Card>
    
    <Card
    //key={idx}
    style={styles.card}>
      <Text style={styles.heading}>Address Information</Text>
      <View style={styles.cardview}>      
        <Text style={styles.text}>Door No</Text>
        <Text style={styles.data}>        {cards?.data?.address?.doorNo}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Street/Area</Text>
        <Text style={styles.data}>{cards?.data?.address?.street}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>City</Text>
        <Text style={styles.data}>                {cards?.data?.address?.place}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Pincode</Text>
        <Text style={styles.data}>        {cards?.data?.address?.pincode}</Text> 
      </View>
    </Card>
    
    {cards?.data?.degree?.map((card,idx) => (
    <Card
      key={idx}
      style={styles.card}>
        <Text style={styles.heading}>Educational Information</Text>
      <View style={styles.cardview}>      
        <Text style={styles.text}>Qualification</Text>
        <Text style={styles.data}>   {card.degree}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>College Name</Text>
        <Text style={styles.data}>{card.collegeName}</Text> 
      </View>
    </Card>))}

    {cards?.data?.company?.map((card,idx) => [
    <Card
    style={styles.card}>
    <Text style={styles.heading}>Professional Details</Text>
      <View style={styles.cardview}>      
        <Text style={styles.text}>Company Name</Text>
        <Text style={styles.data}>{card.name}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Role/Position</Text>
        <Text style={styles.data}>  {card.roll}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Starting Date</Text>
        <Text style={styles.data}>  {card.from}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Ending Date</Text>
        <Text style={styles.data}>    {card.to}</Text> 
      </View>
    </Card>])}
      
  <Card
    style={styles.card}>
      <Text style={styles.heading}>Employee Information</Text>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Department</Text>
        <Text style={styles.data}>{cards?.data?.department}</Text> 
      </View>
      
      {cards?.data?.role.map((card,idx) => (
      <View style={styles.cardview}>      
        <Text style={styles.text}>Role</Text>
        <Text style={styles.data}>              {card}</Text>
      </View>))}

    {cards?.data?.skill.map((card,idx) => (
      <View style={styles.cardview}>      
        <Text style={styles.text}>Skill</Text>
        <Text style={styles.data}>              {card}</Text>
      </View>))}             
    </Card>

    <Text></Text>

</ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "lightblue"
  },
  heading: {
    alignItems:'center',
    textAlign:'center',
    color:"white",
    fontWeight:'bold',
    fontSize:20,
    textShadowColor:"black",
    textShadowRadius:2,
  },
  cardview: {
    flexDirection:'row',
    padding: 5
  },
  
  text: {
    fontSize: 15,
    fontWeight:'bold',
    color: "white",
    marginRight :20
  },
  
  data: {
    fontSize: 15,
    fontWeight:'bold',
    color: "white",
    marginLeft :25
  },

  skill: {
    fontSize: 15,
    fontWeight:'bold',
    color: "white",
    marginRight :80
  },
  
  card:{
    padding:10,
    margin:5,
    backgroundColor:"blue",
    borderRadius:15,
    borderStyle:'solid',
    borderWidth :0.5
  }
});

export default EmpView2;