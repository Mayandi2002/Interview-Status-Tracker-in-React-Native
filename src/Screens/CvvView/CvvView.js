import React,{useState,useEffect} from 'react';
import { Text, StyleSheet, View, Pressable,ScrollView } from 'react-native';
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
  axios.get(`http://192.168.1.3:8080/candidate/${route.params.data.id}`)
  .then(({data}) => {
    console.log(data)
     setCards(data)
  })
  .catch(err => {
     console.log(err)
  })
}, [])

//{cards.map((card,id) => )}

  return(
    <ScrollView style={styles.container}>
     
     {/*{cards.map((card,idx) => (
        <Card
        key={idx}
      style={styles.card}> 
      <View style={styles.cardview}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.data}>{card.id}</Text>
      
      </View>
     </Card>))}*/}

      <Text style={styles.heading}>Basic Information</Text>
    
    <Card
    style={styles.card}>
      <Pressable
        onPress={Edit} 
        style={styles.editbtn}>
          <Text 
          style={{
            color:"black",
            fontWeight:'bold'
            }}>
            Update Details
          </Text>
        </Pressable>
      <View 
      style={styles.cardview}>      
        <Text style={styles.text}>Application ID</Text>
        <Text style={styles.data}>{cards.id}</Text> 
        
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>First Name</Text>
        <Text style={styles.data}>    {cards.firstName}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Last Name</Text>
        <Text style={styles.data}>    {cards.lastName}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Email</Text>
        <Text style={styles.data}>              {cards.email}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Mobile No</Text>
        <Text style={styles.data}>    {cards.phone}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>DOB</Text>
        <Text style={styles.data}>               {cards.dob}</Text> 
      </View>
      
      </Card>
      
      {/*Address Information*/}
      <Text style={styles.heading}>Address Information</Text>
    
    <Card
    //key={id}
    style={styles.card}>
      <View style={styles.cardview}>      
        <Text style={styles.text}>Door No</Text>
        <Text style={styles.data}>        {cards.doorNo}</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Street/Area</Text>
        <Text style={styles.data}>Church Street</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>City</Text>
        <Text style={styles.data}>                Sathankulam</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Pincode</Text>
        <Text style={styles.data}>        628704</Text> 
      </View>

    </Card>

    <Text style={styles.heading}>Educational Information</Text>
    
    <Card
    style={styles.card}>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Qualification</Text>
        <Text style={styles.data}>   {cards.map}</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>College Name</Text>
        <Text style={styles.data}>{cards.collegeName}</Text> 
      </View>

    </Card>


    <Text style={styles.heading}>Professional Details</Text>
    <Text style={styles.heading}>Company 1</Text>

    <Card
    style={styles.card}>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Company Name</Text>
        <Text style={styles.data}>Icanio</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Role/Position</Text>
        <Text style={styles.data}>Developer</Text> 
      </View>


      <View style={styles.cardview}>      
        <Text style={styles.text}>Starting Date</Text>
        <Text style={styles.data}>Sat,2 Apr 2022 09:10 AM</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Ending Date</Text>
        <Text style={styles.data}>  Sat,2 Apr 2022 09:10 AM</Text> 
      </View>

    </Card>

    <Text style={styles.heading}>Company 2</Text>
    
    <Card
    style={styles.card}>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Company Name</Text>
        <Text style={styles.data}>Icanio</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Role/Position</Text>
        <Text style={styles.data}>Developer</Text> 
      </View>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Starting Date</Text>
        <Text style={styles.data}>Sat,2 Apr 2022 09:10 AM</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Ending Date</Text>
        <Text style={styles.data}>  Sat,2 Apr 2022 09:10 AM</Text> 
      </View>

    </Card>

    
    <Text style={styles.heading}>Skills and Apply Role</Text>

<Card
    style={styles.card}>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Technology Skills</Text>
        <Text style={styles.data}>{cards.skill}</Text>
         </View>
        
         {/*<View style={{flexDirection:'row-reverse'}}>
        <Text style={styles.skill}>Easy Learn</Text>
          </View>*/}

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
    color:"royalblue",
    fontWeight:'800',
    fontSize:17
  },

  editbtn: {
    marginLeft :220,
    backgroundColor:"#e8e8e8",
    padding:2,
    borderRadius :7,
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
    margin:5,
    backgroundColor:"green",
    borderRadius:15,
    borderStyle:'solid',
    borderWidth :0.5
  }
});

export default CvvView;