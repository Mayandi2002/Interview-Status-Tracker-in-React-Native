import React,{useState,useEffect} from 'react';
import { Text, StyleSheet, View, Pressable,ScrollView,Alert } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const CvvView = ({route}) => {
  //console.log(route.params.data);

  const MyStack = useNavigation();

  const Edit = () => {
  
    console.log("Edit is Pressed")
    MyStack.navigate('CvvUpdate');

  }

  const [cards,setCards] = useState([])

  useEffect(()=>{
  axios.get(`http://35.154.117.105:8080/candidate/${route.params.data.id}`)
  .then(({data}) => {
    console.log(data)
      setCards(data)
  })
  .catch(({response}) => {
      console.log(response)
  })
}, [])

const hire = () => {
  Alert.alert(
    "Alert!",
    "Are you Sure Want to Hire this Candidate",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { 
        text: "Confirm", 
        onPress: () => axios.post(`http://35.154.117.105:8080/candidate/hired/${route.params.data.id}`)
        .then(({data}) => {
          console.log(data)
          alert(data.msg)
        })
        .catch(({response}) => {
          console.log(response)
        })
      }
    ]
  );
}

const reject = () => {
  Alert.alert(
    "Alert!",
    "Are you Sure Want to Reject this Candidate",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { 
        text: "Confirm", 
        onPress: () => axios.post(`http://35.154.117.105:8080/candidate/rejected/${route.params.data.id}`)
        .then(({data}) => {
          console.log(data)
          alert(data.msg)
        })
        .catch(({response}) => {
          console.log(response)
        })
      }
    ]
  );
} 

const waiting = () => {
  Alert.alert(
    "Alert!",
    "Are you Sure Want to Wait this Candidate",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { 
        text: "Confirm", 
        onPress: () => axios.post(`http://35.154.117.105:8080/candidate/waitingList/${route.params.data.id}`)
        .then(({data}) => {
          console.log(data)
          alert(data.msg)
        })
        .catch(({response}) => {
          console.log(response)
        })
      }
    ]
  );
}

const progress = () => {
  Alert.alert(
    "Alert!",
    "Are you Sure Want to Progress this Candidate",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { 
        text: "Confirm", 
        onPress: () => axios.post(`http://35.154.117.105:8080/candidate/progress/${route.params.data.id}`)
        .then(({data}) => {
          console.log(data)
          alert(data.msg)
        })
        .catch(({response}) => {
          console.log(response)
        })
      }
    ]
  );
}

  return(
    <ScrollView style={styles.container}>
                      <Text></Text>
    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
      <Pressable
        onPress={hire} 
        style={styles.topbtn1}>
          <Text 
          style={{
            color:"mediumblue",
            fontWeight:'bold'}}>Hire to Job</Text>
      </Pressable>
        
      <Pressable
        onPress={waiting} 
        style={styles.topbtn3}>
          <Text 
          style={{
            color:"mediumblue",
            fontWeight:'bold'}}>Waiting List</Text>
      </Pressable>
        
      <Pressable
        onPress={progress} 
        style={styles.topbtn4}>
          <Text 
          style={{
            color:"white",
            fontWeight:'bold'}}>Progress</Text>
      </Pressable>

      <Pressable
        onPress={reject} 
        style={styles.topbtn2}>
          <Text 
          style={{
            color:"white",
            fontWeight:'bold'}}>Reject</Text>
      </Pressable>
    </View>
                <Text></Text>
    
      {/*<Text style={styles.heading}>Basic Information</Text>*/}
    
    <Card
    style={styles.card}>
      <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingBottom :7}}>
    <Text style={styles.insideheading}>Basic Information</Text>
      <Pressable
        onPress={Edit} 
        style={styles.editbtn}>
          <Text 
          style={{
            color:"black",
            fontWeight:'bold'}}>Update</Text>
      </Pressable>
      </View>
      <View 
      style={styles.cardview}>      
        <Text style={styles.text}>Application ID</Text>
        <Text style={styles.data}>{cards.id}</Text> 
        
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>First Name</Text>
        <Text style={styles.data}>     {cards.firstName}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Last Name</Text>
        <Text style={styles.data}>     {cards.lastName}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Email</Text>
        <Text style={styles.data}>               {cards.email}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Mobile No</Text>
        <Text style={styles.data}>     {cards.phone}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>DOB</Text>
        <Text style={styles.data}>                {cards.dob}</Text> 
      </View>
      
      </Card>
      
      {/*
      <Text style={styles.heading}>Address Information</Text>
    */}

    <Card
    //key={idx}
    style={styles.card}>
      <Text style={styles.heading}>Address Information</Text>
      <View style={styles.cardview}>      
        <Text style={styles.text}>Door No</Text>
        <Text style={styles.data}>        {cards?.address?.doorNo}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Street/Area</Text>
        <Text style={styles.data}>{cards?.address?.street}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>City</Text>
        <Text style={styles.data}>                {cards?.address?.place}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Pincode</Text>
        <Text style={styles.data}>        {cards?.address?.pincode}</Text> 
      </View>

    </Card>

    
    
    {cards.qualification?.map((card,idx) => (
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


    
    {/*<Text style={styles.heading}>Company 1</Text>*/}

    {cards.company?.map((card,idx) => [
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
        <Text style={styles.heading}>Skills and Apply Role</Text>
      <View style={styles.cardview}>      
        <Text style={styles.text}>Technology Skills</Text>
        <Text style={styles.data}>{cards.skill}</Text>
      </View>
        
  
      <View style={styles.cardview}>      
        <Text style={styles.text}>Role/Position</Text>
        <Text style={styles.data}>      {cards.job}</Text> 
      </View>

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
    textAlign:'center',
    color:"white",
    fontWeight:'bold',
    fontSize:17.5,
    textDecorationColor: "#e8e8e8",
    textShadowColor: "black",
    textShadowRadius: 3,
    textDecorationLine: 'underline',
    paddingBottom :7
  },

  insideheading: {
    marginLeft :90,
    textAlign:'center',
    color:"white",
    fontWeight:'bold',
    fontSize:17.5,
    textDecorationColor: "#e8e8e8",
    textShadowColor: "black",
    textShadowRadius: 3,
    textDecorationLine: 'underline',
  },

  editbtn: {
    marginLeft :35,
    backgroundColor:"#e8e8e8",
    padding:5,
    borderRadius :5,
    borderColor:"black",
    borderWidth :0.6,
    borderStyle:'solid',
  },
  
  topbtn1: {
    //alignItems:'center',
    marginLeft :7,
    backgroundColor:"#7cfc00",
    padding:10,
    borderRadius :7,
    borderColor:"black",
    borderWidth :0.5,
    borderStyle:'solid',
  },
  topbtn2: {
    //alignItems:'center',
    marginLeft :7,
    backgroundColor:"red",
    padding:10,
    borderRadius :7,
    borderColor:"black",
    borderWidth :0.5,
    borderStyle:'solid',
  },
  
  topbtn3: {
    //alignItems:'center',
    marginLeft :7,
    backgroundColor:"yellow",
    padding:10,
    borderRadius :7,
    borderColor:"black",
    borderWidth :0.5,
    borderStyle:'solid',
  },

  topbtn4: {
    //alignItems:'center',
    marginLeft :7,
    backgroundColor:"blue",
    padding:10,
    borderRadius :7,
    borderColor:"black",
    borderWidth :0.5,
    borderStyle:'solid',
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
    margin:3,
    backgroundColor:"mediumblue",
    borderRadius:15,
    borderStyle:'solid',
    borderWidth :0.5
  }
});

export default CvvView;