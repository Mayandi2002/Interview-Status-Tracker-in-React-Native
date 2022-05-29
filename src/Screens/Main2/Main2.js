import React,{ useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, RefreshControl,
        Pressable, TouchableOpacity, Alert, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { event } from 'react-native-reanimated';

const Main2 = () => {
  const MyStack = useNavigation();

const [ cards, setCards ] = useState([])
  useEffect(()=>{
    axios.get("http://192.168.1.3:8080/candidate?size=1000&page=0")
    .then(({data}) => {
      console.log(data)
      setCards(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
      axios.get("http://192.168.1.3:8080/candidate?size=1000&page=0")
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
          onPress={() => MyStack.navigate('CvvView2',{data:card})}>
      <Card
        style={styles.card}> 
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
    //marginTop :5
  },
  text: {
    flex: 1,
    fontSize: 14.5,
    fontWeight:'bold',
    color:"white",
    marginLeft :10,
    //marginTop :5
  },
  datatxt:{
    flex: 1,
    fontSize: 14,
    fontWeight:'bold',
    color:"white",
    marginRight :20,
    marginLeft :10,
    //marginTop :5
  },
  card:{
    margin:7,
    height :130,
    marginVertical:5,
    backgroundColor:"blue",
    borderRadius:13,
    borderStyle:'solid'
  }
});

export default Main2;