import React,{ useState,useEffect } from 'react';
import { Text, StyleSheet, View,ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-paper';
import axios from 'axios';

const EmpList2 = () => {
  const MyStack = useNavigation();
 
const [cards,setCards] = useState([])
useEffect(()=>{
  axios.get("http://192.168.1.3:8080/employee?size=1000&page=0")
  .then(({data}) => {
    console.log(data)
    setCards(data)
  })
  .catch((err) => {
    console.log(err)
     //alert(err)
  })
}, [])

return(
    <ScrollView style={styles.container}>
      
      {cards.map((card, idx) => (
      <TouchableOpacity 
        key={idx}
        activeOpacity={0.9} 
        onPress={()=> MyStack.navigate('EmpView2',{data:card})}>
      <Card
        style={styles.card}> 
      <View style={styles.list}>
        
        <Text style={styles.text}>First Name</Text>
        <Text style={styles.text}>{card.firstName}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Last Name</Text>
        <Text style={styles.text}>{card.lastName}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>{card.email}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Department</Text>
        <Text style={styles.text}>{card.department}</Text>
      </View>
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
    marginLeft :10
  },
  text: {
    flex: 1,
    fontSize: 13.5,
    fontWeight:'bold',
    color:"white"
  },
  card:{
    margin:6,
    height :130,
    paddingTop :10,
    backgroundColor:"blue",
    borderRadius:15,
    paddingBottom :3,
  }
});

export default EmpList2;