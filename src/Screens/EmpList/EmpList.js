import React,{ useState,useEffect } from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View,ScrollView, Pressable,Alert,FlatList ,TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-paper';
import axios from 'axios';

const EmpList = () => {
  const MyStack = useNavigation();
 
const [cards,setCards] = useState([])
useEffect(()=>{
  axios.get("http://192.168.1.3:8080/employee?size=200&page=0")
  .then(({data}) => {
    console.log(data)
    setCards(data)
  })
  .catch((err) => {
    console.log(err)
     //alert(err)
  })
}, [])


const DelEmp = (id) => {
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
        onPress: () => axios.delete(`http://192.168.1.3:8080/employee/${id}`)
        .then(({data}) => {
          console.log(data)
          alert(data.msg)
        })
        .catch(({response}) => {
          console.log(response.data)
          alert(response.status)
        }) 
      }
    ]
  );
}



return(
    <ScrollView style={styles.container}>
      
      {cards.map((card, idx) => (
      <TouchableOpacity 
        key={idx}
        activeOpacity={0.9} 
        onPress={()=> MyStack.navigate('EmpView',{data:card})}>
      <Card
        style={styles.card}> 
      
      <Pressable
        onPress={() => DelEmp(card.id)}
        style={{
          backgroundColor:"blue",borderColor:"white",
          borderWidth :0.7,marginLeft :310,marginRight :10,marginTop :2,borderRadius:5}}>
        <Icon name='delete' color="white" size={25} />
      </Pressable>
      <View style={styles.list}>
        
        <Text style={styles.text}>ID</Text>
        <Text style={styles.text}>{card.id}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Firstname</Text>
        <Text style={styles.text}>{card.firstName}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>{card.email}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Department</Text>
        <Text style={styles.text}>{card.department}</Text>
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
    marginLeft :3
  },
  text: {
    flex: 1,
    fontSize: 13.5,
    fontWeight:'bold',
    color:"white"
  },
  card:{
    margin:6,
    backgroundColor:"blue",
    borderRadius:15
  }
});

export default EmpList;