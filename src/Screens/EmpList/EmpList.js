import React,{ useState,useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, Pressable, 
          Alert, TouchableOpacity, RefreshControl,ToastAndroid } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card,FAB } from 'react-native-paper';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

const EmpList = () => {
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

const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
      axios.get("http://192.168.1.3:8080/employee?size=1000&page=0")
    .then(({data}) => {
      console.log(data)
      setCards(data)
      setRefreshing(false);
    }) 
    .catch((err) => {
      console.log(err)
    })
    
  }, [refreshing]);

const DelEmp = (id) => {
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
        onPress: () => axios.delete(`http://192.168.1.3:8080/employee/${id}`)
        .then(({data}) => {
          console.log(data)
          alert(data.msg)
        })
        .catch(({response}) => {
          console.log(response.data)
          alert(response.status)
        }) 
      }]);
}

const Download = () => {
  const { config, fs } = RNFetchBlob
  let DownloadDir = fs.dirs.DownloadDir
  let options = {
    fileCache: true,
    addAndroidDownloads : {
      useDownloadManager : true,
      notification : true,
      path:  DownloadDir + '/Interview Status Tracker/'+ '/Employee/' + "/Employee Details.xlsx", 
      description : 'Downloading File'
    }
  }
  config(options).fetch('GET', "http://192.168.1.3:8080/excel/employee?size=1000&page=0")
          .then(({data}) => {
            console.log(data)
            ToastAndroid.show("Downloading Start",ToastAndroid.LONG);
          })
          .catch((err) => {
            console.log(err)
            ToastAndroid.show("Downloading Failed",ToastAndroid.LONG);
          })
}
return(
  <View style={{flex:1}}>
    <ScrollView style={styles.container}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}/>}>
      
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
  <FAB
      style={styles.fab}
      small
      icon="account-plus"
      color='white'
      onPress={() => MyStack.navigate('RegEmp')} />
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
    marginLeft :10
  },
  text: {
    flex: 1,
    fontSize: 13.5,
    fontWeight:'bold',
    color:"white"
  },
  fab: {
    justifyContent: "center",
		alignItems: "center",
		position: "absolute",
    padding: 10,
		bottom : 95,
		right : 15,
		backgroundColor: "crimson",
  },
  fab2: {
    justifyContent: "center",
		alignItems: "center",
		position: "absolute",
    padding: 10,
		bottom : 30,
		right : 15,
		backgroundColor: "crimson",
  },
  card:{
    margin:6,
    height :150,
    paddingTop :5,
    backgroundColor:"blue",
    borderRadius:15,
    paddingBottom :3,
  }
});

export default EmpList;