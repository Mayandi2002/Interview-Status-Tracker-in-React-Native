import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../Screens/Main/Main';
//import Home from '../Screens/Home/Home';


const MyDrawer=()=> {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />
      {/*<Drawer.Screen name="Home" component={Home} />*/}
    </Drawer.Navigator>
  );
}
export default MyDrawer;