import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../../../screens/DrawerScreens/About';
import Faq from '../../../screens/DrawerScreens/FAQ';
import Setting from '../../../screens/DrawerScreens/Setting';
import BottomNavigation from '../Bottom';
import CustomDrawer from '../../../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen
        options={{headerShown: false}}
        name="Bottom"
        component={BottomNavigation}
      /> */}
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Faq" component={Faq} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
