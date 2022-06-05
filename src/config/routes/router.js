import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './stack';

export default function Router() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
