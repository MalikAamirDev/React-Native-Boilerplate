import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import DrawerNavigation from './drawer';
import StackNavigation from './Stack';
import DrawerNavigation from './drawer';
import BottomNavigation from './Bottom';

export default function Router() {
  return (
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      <StackNavigation />
      {/* <BottomNavigation /> */}
    </NavigationContainer>
  );
}
