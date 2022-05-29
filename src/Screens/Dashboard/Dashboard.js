import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity,
        RefreshControl, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const MyStack = useNavigation();
  
  const [cards, setCards] = useState([])
    useEffect(() => {
      axios.get("http://192.168.1.3:8080/dashBoard")
      .then(({data}) => {
        setCards(data)
        console.log(data)

      })
      .catch(err => {
        console.log(err)
      })
    }, [])
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios.get('http://192.168.1.3:8080/dashBoard')
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
      
    {cards.map((card, idx) => (
      <TouchableOpacity activeOpacity={0.9} key={idx}
      onPress={() => MyStack.navigate('Candidate Status',{data:card})}>
      <Card
        style={styles.card}> 
      <View style={styles.list}>
        <Text style={styles.text}>{card.title}</Text>
        <Text style={styles.txt}>{card.count}</Text>
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
    padding: 10,
    backgroundColor:"lightblue"
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    //padding: 10,
    marginLeft :35,
    alignItems:'center'
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight:'bold',
    color:"white",
  },
  card: {
    margin:10,
    backgroundColor:"blue",
    borderRadius:15,
    height :105,
    flexDirection:'column'
  },
  txt: {
    flex: 1,
    textAlign:'center',
    fontSize: 30,
    shadowColor:"black",
    shadowRadius:10,
    fontWeight: 'bold',
    color: "red",
  }
});

export default Dashboard;