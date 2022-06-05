import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../../screens/BottomScreens/Home';
import More from '../../../screens/BottomScreens/More';
import DrawerNavigation from '../drawer';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          initialRouteName: 'Home',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
