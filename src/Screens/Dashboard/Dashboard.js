import React,{ useState } from 'react';
import { Text, StyleSheet, View ,ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

const Dashboard = () => {
  

  return(

    <View style={styles.container}>
      <ScrollView>
      <Text style={{fontSize: 30,fontWeight: 'bold',color: "red",textAlign: 'center',padding: 20}}>DashBoard</Text>
    <Card
    onPress={() => alert(" Apply Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>Applied</Text>
        <Text style={styles.txt}>      40</Text>
      </View>
      </Card>

      <Card
      onPress={() => alert(" Passed Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>Passed</Text>
        <Text style={styles.txt}> 20/40</Text>
      </View>
         </Card>
      
         <Card
         onPress={() => alert(" Failed Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>Failed</Text>
        <Text style={styles.txt}> 16/40</Text>
      </View>
         </Card>

         <Card
         onPress={() => alert(" Absents Detais Page Opened")}
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>Absents</Text>
        <Text style={styles.txt}> 4/40</Text>
      </View>
         </Card>
         </ScrollView>
    </View>
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