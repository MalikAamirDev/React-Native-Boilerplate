import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from '../drawer';
import Login from '../../../screens/StackScreens/Login';
import Signup from '../../../screens/StackScreens/Signup';
import BottomNavigation from '../Bottom';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Signup} name="Signup" />
        <Stack.Screen
          options={{headerShown: false}}
          component={BottomNavigation}
          name="Bottom"
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
