import React,{ useState, useEffect} from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView,
        Alert, ToastAndroid,RefreshControl } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const CvvView = ({route}) => {
  
  const MyStack = useNavigation();
  const Edit = () => {
    MyStack.navigate('CvvUpdate',{data:cards});
  }
  const[ cards, setCards ] = useState([])
  useEffect(()=>{
  axios.get(`http://192.168.1.3:8080/candidate/${route.params.data.id}`)
  .then(({data}) => {
    console.log(data)
      setCards(data)
  })
  .catch(({response}) => {
      console.log(response.data)
  })
  }, [])

  const hire = () => {
    Alert.alert(
      "Alert!",
      "Are you Sure Want to Hire this Candidate",
      [{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "Confirm", 
          onPress: () => axios.post(`http://192.168.1.3:8080/candidate/${route.params.data.id}/hired`)
          .then(({data}) => {
            console.log(data.msg)
            ToastAndroid.show(data.msg,ToastAndroid.LONG)
          })
          .catch(({response}) => {
            console.log(response.data)
            alert(response.msg)
          })
        }]);
    }

  const reject = () => {
    Alert.alert(
      "Alert!",
      "Are you Sure Want to Reject this Candidate",
      [{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "Confirm", 
          onPress: () => axios.post(`http://192.168.1.3:8080/candidate/${route.params.data.id}/rejected`)
          .then(({data}) => {
            console.log(data)
            ToastAndroid.show(data.msg,ToastAndroid.LONG)
          })
          .catch(({response}) => {
            console.log(response.data)
          })
        }]);
    } 

  const waiting = () => {
    Alert.alert(
      "Alert!",
      "Are you Sure Want to Wait this Candidate",
      [{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "Confirm", 
          onPress: () => axios.post(`http://192.168.1.3:8080/candidate/${route.params.data.id}/waitinglist`)
          .then(({data}) => {
            console.log(data)
            ToastAndroid.show(data.msg,ToastAndroid.LONG)
          })
          .catch(({response}) => {
            console.log(response.data)
          })
        }]);
    }

  const progress = () => {
    Alert.alert(
      "Alert!",
      "Are you Sure Want to Progress this Candidate",
      [{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "Confirm", 
          onPress: () => axios.post(`http://192.168.1.3:8080/candidate/${route.params.data.id}/progress`)
          .then(({data}) => {
            console.log(data)
            ToastAndroid.show(data.msg,ToastAndroid.SHORT)
          })
          .catch(({response}) => {
            console.log(response.data)
          })
        }]);
    }
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
      axios.get(`http://192.168.1.3:8080/candidate/${route.params.data.id}`)
    .then(({data}) => {
      console.log(data)
      setCards(data)
      setRefreshing(false);
    }) 
    .catch((err) => {
      console.log(err)
    })
    
  }, [refreshing]);

  return(
    <ScrollView style={styles.container}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}/>}>
                      
    <View style={styles.topbtncontainer}>
      <Pressable
        onPress={hire} 
        style={styles.topbtn1}>
        <Text 
          style={{
            color:"#006400",
            fontWeight:'bold'}}>Hire to Job</Text>
      </Pressable>
        
      <Pressable
        onPress={waiting} 
        style={styles.topbtn3}>
        <Text 
          style={{
            color:"orange",
            fontWeight:'bold'}}>Waiting List</Text>
      </Pressable>
        
      <Pressable
        onPress={progress} 
        style={styles.topbtn4}>
        <Text 
          style={{
            color:"blue",
            fontWeight:'bold'}}>Progress</Text>
      </Pressable>

      <Pressable
        onPress={reject} 
        style={styles.topbtn2}>
        <Text 
          style={{
            color:"red",
            fontWeight:'bold'}}>Reject</Text>
      </Pressable>
    </View>
  
  <Card
    style={styles.card}>
      <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingBottom :7}}>
    <Text style={styles.insideheading}>Basic Information</Text>
      <Pressable
        onPress={Edit} 
        style={styles.editbtn}>
        <Icon name="pencil" color="black" size={20} />
      </Pressable>
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
      
      <View style={styles.cardview}>      
        <Text style={styles.text}>Status</Text>
        <Text style={styles.data}>            {cards.status}</Text> 
      </View>
      </Card>
      
    <Card
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

  {cards.company?.map((card,idx) => [
    <Card
      style={styles.card}
      key={idx}>
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
  topbtncontainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom :10,
  },
  heading: {
    textAlign:'center',
    color:"white",
    fontWeight:'bold',
    fontSize:17.5,
    textDecorationColor: "#e8e8e8",
    textShadowColor: "black",
    textShadowRadius: 5,
    //textDecorationLine: 'underline',
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
    textShadowRadius: 5,
    //textDecorationLine: 'underline',
  },
  editbtn: {
    marginLeft :50,
    backgroundColor:"#e8e8e8",
    padding:5,
    paddingHorizontal:10,
    paddingVertical:6,
    borderRadius :5,
    borderColor:"black",
    borderWidth :0.6,
    borderStyle:'solid',
  },
  topbtn1: {
    //alignItems:'center',
    marginLeft :7,
    backgroundColor:"#adff2f",
    padding:10,
    borderRadius :7,
    borderColor:"black",
    borderWidth :0.5,
    borderStyle:'solid',
  },
  topbtn2: {
    //alignItems:'center',
    marginLeft :7,
    backgroundColor:"#ffa07a",
    padding:10,
    borderRadius :7,
    borderColor:"black",
    borderWidth :0.5,
    borderStyle:'solid',
  },
  topbtn3: {
    //alignItems:'center',
    marginLeft :7,
    backgroundColor:"#f0e68c",
    padding:10,
    borderRadius :7,
    borderColor:"black",
    borderWidth :0.5,
    borderStyle:'solid',
  },
  topbtn4: {
    //alignItems:'center',
    marginLeft :7,
    backgroundColor:"#6495ed",
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
    textShadowColor: "black",
    textShadowRadius: 1,
    marginRight :20
  },
  data: {
    fontSize: 15,
    fontWeight:'bold',
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 1,
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

export default CvvView;