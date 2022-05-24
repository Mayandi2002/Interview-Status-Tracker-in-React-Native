import React,{ useState,useEffect } from 'react';
import { Text, StyleSheet, View,ScrollView, Pressable,TouchableOpacity,Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { event } from 'react-native-reanimated';

const Main = () => {
  const MyStack = useNavigation();

const [cards,setCards] = useState([])
useEffect(()=>{
  axios.get("http://192.168.1.3:8080/candidate?size=200&page=0")
  .then(({data}) => {
    console.log(data)
    setCards(data)
  })
  .catch((err) => {
    console.log(err)
  })
}, [])

const Delcandid = (id) => {
  Alert.alert(
    "Alert!",
    "Are you Sure Want to Delete",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { 
        text: "Confirm", 
        onPress: () => axios.delete(`http://192.168.1.3:8080/candidate/${id}`)
        .then(({data}) => {
          console.log(data)
          alert(data.msg)
        })
        .catch(({response}) => {
          console.log(response.data)
          alert(response.data.msg)
        }) 
      }
    ]
  );
}

return(
    <ScrollView style={styles.container}>
      
      {cards.map((card, idx) => (
        <TouchableOpacity activeOpacity={0.9} 
          onPress={() => MyStack.navigate('CvvView',{data:card})}>
      <Card
        style={styles.card}
        key={idx}> 
      
      <Pressable
        onPress={() => Delcandid(card.id)}
        style={{
          backgroundColor:"blue",borderColor:"white",
          borderWidth :0.7,marginLeft :310,marginRight :10,
          marginTop :2,borderRadius:5 }}>
        <Icon name='delete' color="white" size={25} />
      </Pressable>
      <View style={styles.list}>
        <Text style={styles.text}>Firstname</Text>
        <Text style={styles.datatxt}>{card.firstName}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Contact</Text>
        <Text style={styles.datatxt}>{card.phone}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Job/Position</Text>
        <Text style={styles.datatxt}>{card.job}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Status</Text>
        <Text style={styles.datatxt}>{card.status}</Text>
      </View>
      <Text></Text>
      </Card>
      </TouchableOpacity>))}
      <Text></Text>

  </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    paddingTop :7,
    backgroundColor:"lightblue"
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    //marginLeft :5
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontWeight:'bold',
    color:"white",
    marginLeft :10
  },
  datatxt: {
    flex: 1,
    fontSize: 13,
    fontWeight:'bold',
    color:"white",
    marginRight :15
  },
  card:{
    margin:6,
    backgroundColor:"blue",
    borderRadius:13,
    borderStyle:'solid'
  }
});

export default Main;