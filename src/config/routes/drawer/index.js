import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../../../screens/DrawerScreens/About';
import Faq from '../../../screens/DrawerScreens/FAQ';
import Setting from '../../../screens/DrawerScreens/Setting';
import TabNavigation from '../tab';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        // options={{headerShown: false}}
        name="Bottom"
        component={TabNavigation}
      />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Faq" component={Faq} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
