import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, Pressable } from "react-native";

const Main = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[styles.navigationContainer]}>
      <Text style={styles.drawtext}>I'm in the Drawer!</Text>
      {/*<Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
  />*/}
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={200}
      //drawerPosition={drawerPosition}//
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        {/*<Text style={styles.paragraph}>
          Drawer on the {drawerPosition}!
        </Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
  />*/}
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
      <Pressable 
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1.0 }
      ]}
      onPress={() => drawer.current.openDrawer()}> 
          <Text style={{backgroundColor:"blue",color:"white",padding:10,borderColor:"green",borderRadius:2}}>Open drawer</Text>
          </Pressable>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "white"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  drawtext:{
    padding:16,
  fontSize:20,
  textAlign: "center"
  }
});

export default Main;