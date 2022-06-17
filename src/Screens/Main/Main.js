import React,{ useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, RefreshControl,
        Pressable, TouchableOpacity, Alert, FlatList, ToastAndroid } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Card, FAB } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFetchBlob from "rn-fetch-blob";

const Main = () => {
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

const Download = () => {
  const { config, fs } = RNFetchBlob
  let DownloadDir = fs.dirs.DownloadDir
  let options = {
    fileCache: true,
    addAndroidDownloads : {
      useDownloadManager : true,
      notification : true,
      path:  DownloadDir + '/Interview Status Tracker/'+ '/Candidate/' + "/Candidate Details.xlsx", 
      description : 'Downloading File'
    }
  }
  config(options).fetch('GET', "http://192.168.1.3:8080/excel/candidate?size=1000&page=0")
          .then(({data}) => {
            console.log(data)
            ToastAndroid.show("Downloading Start",ToastAndroid.LONG);
          })
          .catch((err) => {
            console.log(err)
            ToastAndroid.show("Downloading Failed",ToastAndroid.LONG);
          })
}

const Delcandid = (id) => {
  Alert.alert(
    "Alert!",
    "Are you Sure Want to Delete",
    [{
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
      }]);
}
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
  <View style={{flex:1}}>
    <ScrollView style={styles.container}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}/>}>
  
      {cards.map((card, idx) => (
        <TouchableOpacity activeOpacity={0.9} key={idx}
          onPress={() => MyStack.navigate('CvvView',{data:card})}>
      <Card
        style={styles.card}> 
      <View style={styles.list}>
        <Text style={styles.text}>Firstname</Text>
        <Text style={styles.datatxtname}>{card.firstName}</Text>
        <Pressable
        onPress={() => Delcandid(card.id)}
        style={{
          backgroundColor:"blue",borderColor:"white",
          borderWidth :0.7,borderRadius:5,marginRight :5}}>
        <Icon name='delete' color="white" size={25} />
      </Pressable>
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
<FAB
      style={styles.fab}
      small
      icon="account-plus"
      color='white'
      onPress={() => MyStack.navigate('CvvUpload')} />
  <FAB
      style={styles.fab2}
      small
      icon="download"
      onPress={Download} />

  </View>
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
  fab: {
    justifyContent: "center",
		alignItems: "center",
		position: "absolute",
    padding: 10,
		bottom : 110,
		right : 15,
		backgroundColor: "crimson",
  },
  fab2: {
    justifyContent: "center",
		alignItems: "center",
		position: "absolute",
    padding: 10,
		bottom : 40,
		right : 15,
		backgroundColor: "crimson",
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
    marginRight :30,
    //marginTop :5
  },
  datatxtname: {
    flex: 1,
    fontSize: 14,
    fontWeight:'bold',
    color:"white",
    //marginRight :15
  },
  card:{
    margin:7,
    marginVertical:5,
    backgroundColor:"blue",
    borderRadius:13,
    borderStyle:'solid'
  }
});

export default Main;