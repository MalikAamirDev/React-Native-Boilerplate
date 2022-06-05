import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../../screens/StackScreens/Login';
import Signup from '../../../screens/StackScreens/Signup';
import TabNavigation from '../tab';
import DrawerNavigation from '../Drawer';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        options={{headerShown: false}}
        name="Bottom"
        component={TabNavigation}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
