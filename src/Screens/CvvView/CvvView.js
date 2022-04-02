import React from 'react';
import { Text, StyleSheet, View, Pressable,ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

const CvvView = () => {
  
const Edit = () => {
  
  alert("Edit is Pressed");
}

  return(
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Basic Information</Text>
    
    <Card
    style={styles.card}>
      
      <View 
      style={styles.cardview}>      
        <Text style={styles.text}>Application ID</Text>
        <Text style={styles.data}>A1</Text> 
        <Pressable
        onPress={Edit} 
        style={styles.editbtn}>
          <Text 
          style={{
            color:"black",
            fontWeight:'500'
            }}>
            Edit
          </Text>
        </Pressable>
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>First Name</Text>
        <Text style={styles.data}>Mayandi</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Last Name</Text>
        <Text style={styles.data}>Muppidathi</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Email</Text>
        <Text style={styles.data}>@mail</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Mobile No</Text>
        <Text style={styles.data}>9087654321</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Phone No</Text>
        <Text style={styles.data}>044-8976554</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Linked In</Text>
        <Text style={styles.data}>mayandilinked In</Text> 
      </View>
      
      </Card>
      
      {/*Address Information*/}
      <Text style={styles.heading}>Address Information</Text>

    <Card
    style={styles.card}>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Ressidental</Text>
        <Text style={styles.data}>Sathankulam</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Permanent</Text>
        <Text style={styles.data}>Sathankulam</Text> 
      </View>

    </Card>

    <Text style={styles.heading}>Professional Details ( Current Company )</Text>

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
        <Text style={styles.data}>Sat,2 Apr 2022 09:10 AM</Text> 
      </View>

    </Card>

    <Text style={styles.heading}>Previous Company 1</Text>
    
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
        <Text style={styles.data}>Sat,2 Apr 2022 09:10 AM</Text> 
      </View>

    </Card>

    <Text style={styles.heading}>Previous Company 2</Text>
    
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
        <Text style={styles.data}>Sat,2 Apr 2022 09:10 AM</Text> 
      </View>

    </Card>

    {/*Educational Details */}

    <Text style={styles.heading}>Educational Information</Text>
    
    <Card
    style={styles.card}>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Qualification</Text>
        <Text style={styles.data}>B.Sc</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>College Name</Text>
        <Text style={styles.data}>Aditanar College</Text> 
      </View>

    </Card>

    {/* Skills Added*/}

    <Text style={styles.heading}>Skills and Apply Role</Text>

<Card
    style={styles.card}>

      <View style={styles.cardview}>      
        <Text style={styles.text}>Technology Skills</Text>
        <Text style={styles.data}>Fast Coding</Text> 
      </View>
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Role/Position</Text>
        <Text style={styles.data}>Developer</Text> 
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
    color:"grey",
    fontWeight:'bold',
    fontSize:17
  },

  editbtn: {
    marginLeft :120,
    backgroundColor:"white",
    padding:2,
    borderRadius :5,
    borderStyle:'solid'
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