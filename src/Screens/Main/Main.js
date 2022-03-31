import React,{ useState } from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, Pressable,FlatList } from 'react-native';
import { Card } from 'react-native-paper';

const Main = () => {
  const[Candidates] = useState ([
    {ID:'1',Appid:'A1',Name:'Mayandi',Degree:'B.Sc(CS)',Contact:'9087654321'},
    {ID:'2',Appid:'A2',Name:'Muppidathi',Degree:'B.Sc(CS)',Contact:'9087698421'},
    {ID:'3',Appid:'A3',Name:'Rakesh',Degree:'B.Sc(CS)',Contact:'9087655421'},
    {ID:'4',Appid:'A4',Name:'Kuthalinagm',Degree:'B.Sc(CS)',Contact:'98777654321'},
    {ID:'5',Appid:'A5',Name:'Jp',Degree:'B.Sc(CS)',Contact:'9087687321'},
    {ID:'6',Appid:'A6',Name:'Seelan',Degree:'B.Sc(CS)',Contact:'9034654321'}
  ]);

const CandidatesData = (item) => {
  var Appid=item.Appid;
  var Name=item.Name;
  var Degree=item.Degree;
  var Contact=item.Contact;

alert(Appid+"\n"+Name+"\n"+Degree+"\n"+Contact);
}

  return(
    <View style={styles.container}>
      <FlatList 
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
    />
    
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor:"lightblue"
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginLeft :20
  },
  text: {
    flex: 1,
    fontSize: 15,
    fontWeight:'bold',
    color:"white"
  },
  card:{
    margin:5,
    backgroundColor:"#0000cd",
    borderRadius:15
  }
});

export default Main;