import React,{ useState,useEffect } from 'react';
import { Text, StyleSheet, View,ScrollView, Pressable,TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const Main = () => {
  const MyStack = useNavigation();
  
  {/*const[Candidates] = useState ([
    {ID:'1',Appid:'A1',Name:'Mayandi',Degree:'B.Sc(CS)',Contact:'9087654321'},
    {ID:'2',Appid:'A2',Name:'Muppidathi',Degree:'B.Sc(CS)',Contact:'9087698421'},
    {ID:'3',Appid:'A3',Name:'Rakesh',Degree:'B.Sc(CS)',Contact:'9087655421'},
    {ID:'4',Appid:'A4',Name:'Kuthalinagm',Degree:'B.Sc(CS)',Contact:'98777654321'},
    {ID:'5',Appid:'A5',Name:'Jp',Degree:'B.Sc(CS)',Contact:'9087687321'},
    {ID:'6',Appid:'A6',Name:'Seelan',Degree:'B.Sc(CS)',Contact:'9034654321'}
  ]);

const CandidatesData = () => {
MyStack.navigate('CvvView');
};*/}

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

const Delcandid=(id)=> {
  axios.delete(`http://192.168.1.3:8080/candidate?id=${id}`)
  .then(({data}) => {
     console.log(data)
     alert(data.msg)
  })
  .catch(({response}) => {
     console.log(response.data)
     alert(response.data.msg)
  })
}

return(
    <ScrollView style={styles.container}>
      
      {cards.map((card, idx) => (
        <TouchableOpacity activeOpacity={0.9} 
          onPress={()=> MyStack.navigate('CvvView',{data:card})}>
      <Card
      style={styles.card}
      key={idx}
      > 
      <Pressable
      onPress={()=>Delcandid(card.id)}
      style={{padding:5,backgroundColor:"white",marginLeft :290,margin:1,borderRadius:15}}>
        
        <Text style={{color:"black"}}>Delete</Text></Pressable>
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
        <Text style={styles.text}>Contact</Text>
        <Text style={styles.text}>{card.phone}</Text>
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
    marginLeft :3
  },
  text: {
    flex: 1,
    fontSize: 13,
    fontWeight:'bold',
    color:"white"
  },
  card:{
    margin:6,
    backgroundColor:"blue",
    borderRadius:15
  }
});

export default Main;