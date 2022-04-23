import React,{ useState,useEffect } from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View,ScrollView, Pressable,FlatList ,TouchableOpacity} from 'react-native';
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
  axios.get("http://192.168.0.137:8080/candidate")
  .then(({data}) => {
     setCards(data)
     //console.log(data)
  })
  .catch(err => {
     console.log(err)
     alert(err)
  })
}, [])

const Delcandid=(id)=> {
  //alert('delete is Pressed')
  axios.delete(`http://192.168.0.137:8080/candidate?id=${id}`)
  .then(({data}) => {
     //setCards(data)
     console.log(data.msg)
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
        <TouchableOpacity activeOpacity={0.9} onPress={()=> MyStack.navigate('CvvView',{data:card})}>
      <Card
      style={styles.card}
      key={idx}> 
      <Pressable
      onPress={()=>Delcandid(card.id)}
      style={{padding:10,backgroundColor:"white",marginRight :280,borderRadius:15}}><Text style={{color:"black"}}>Delete</Text></Pressable>
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

      {/*<FlatList 
      data={Candidates}
      renderItem={({item})=>
    <Card
    onPress={CandidatesData.bind(this,item)} 
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>Application ID</Text>
        <Text style={styles.text}>{item.Appid}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>{item.Name}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Degree</Text>
        <Text style={styles.text}>{item.Degree}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Contact</Text>
        <Text style={styles.text}>{item.Contact}</Text>
      </View>
    </Card>
    }
    keyExtractor={item=>item.ID}
  />*/}
    
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

export default Main;