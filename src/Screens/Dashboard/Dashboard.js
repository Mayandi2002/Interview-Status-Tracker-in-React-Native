import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
const Dashboard = () => {
  
  const [cards, setCards] = useState([])

    useEffect(() => {
      axios.get("http://35.154.117.105:8080/dashBoard")
      .then(({data}) => {
        setCards(data)
        console.log(data)

      })
      .catch(err => {
        console.log(err)
         //alert(err)
      })
    }, [])
  
  return(
  <ScrollView style={styles.container}>
      
      {/*<Text style={{fontSize: 30,fontWeight: 'bold',color: "red",textAlign: 'center',padding: 20}}>DashBoard</Text>*/}
      
      {cards.map((card, idx) => (
      <Card
      style={styles.card}
      key={idx}> 
      <View style={styles.list}>
        <Text style={styles.text}>{card.title}</Text>
        <Text style={styles.txt}>{card.count}</Text>
      
      </View>
      </Card>))}
            <Text></Text>
  </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    //paddingLeft :20,
    //paddingRight :20,
    backgroundColor:"lightblue"
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft :17,
    //marginRight :30,
    alignItems:'center'
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight:'bold',
    color:"white",
    //marginBottom :5
    //paddingRight :1,
    //paddingLeft :1
    
  },
  card:{
    margin:10,
    backgroundColor:"blue",
    borderRadius:15,
    height : 130,
    flexDirection:'column'
  },
  txt: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: "red",
    marginLeft :5
    //paddingLeft :5
  }
});

export default Dashboard;