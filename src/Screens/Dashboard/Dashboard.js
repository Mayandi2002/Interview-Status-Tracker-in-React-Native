import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
const Dashboard = () => {
  {/*const[Title] = useState('')
  const[Count] = useState('')
  const [Dash] = useState([
    
    axios.get('http://192.168.1.100:8080/dashboard',{
      title: Title,
      count: Count,
  })
    .then(({data}) => {
      //alert('Login Successfully')
    alert(data)
    console.log(data)
  })
  .catch(function (error) {
      alert(error)
      console.log(error);
  })
    ]);

  const getinfo = () => {
    axios.get('http://192.168.1.100:8080/dashboard',{
      title: Title,
      count: Count,
  })
    .then(({data}) => {
      //alert('Login Successfully')
    alert(data)
    console.log(data)
  })
  .catch(function (error) {
      alert(error)
      console.log(error);
  });
  }*/}
  const [cards, setCards] = useState([])
  //const [Title,Count] = useState();

   useEffect(() => {
      axios.get("http://192.168.43.31:8080/dashBoard")
      .then(({data}) => {
         setCards(data)
      })
      .catch(err => {
         console.log(err)
      })
   }, [])
  
  return(

    <ScrollView style={styles.container}>
      
      
      <Text style={{fontSize: 30,fontWeight: 'bold',color: "red",textAlign: 'center',padding: 20}}>DashBoard</Text>
      
      
      {cards.map((card, idx) => (
      <Card
      style={styles.card}
      key={idx}> 
      <View style={styles.list}>
        <Text style={styles.text}>{card.title}</Text>
        <Text style={styles.txt}>{card.count}</Text>
        <Text>hello</Text>
      </View>
      </Card>))}
    
      
      <Card
    //onPress={() => alert(" Apply Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>Title</Text>
        <Text style={styles.txt}>Count</Text>
      </View>
      </Card>
    
    {/*<Card
    //onPress={() => alert(" Apply Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>{Title}</Text>
        <Text style={styles.txt}>      {Count}</Text>
      </View>
      </Card>

      <Card
      //onPress={() => alert(" Passed Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>{Title}</Text>
        <Text style={styles.txt}> {Count}</Text>
      </View>
         </Card>
      
         <Card
         //onPress={() => alert(" Failed Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>{Title}</Text>
        <Text style={styles.txt}> {Count}</Text>
      </View>
         </Card>

         <Card
         //onPress={() => alert(" Absents Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>{Title}</Text>
        <Text style={styles.txt}> {Count}</Text>
      </View>
         </Card>
      */}         
  </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"white"
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 50,
    marginLeft :20
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight:'bold',
    color:"white"
    
  },
  card:{
    margin:20,
    backgroundColor:"blue",
    borderRadius:15,
    height : 140,
  },
  txt: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: "red"
  }
});

export default Dashboard;