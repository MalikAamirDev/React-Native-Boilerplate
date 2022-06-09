import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../../screens/StackScreens/Login';
import Signup from '../../../screens/StackScreens/Signup';
import TabNavigation from '../tab';
import DrawerNavigation from '../Drawer';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const state = useSelector(state => state);
  const {auth} = state;
  return (
    <>
      <Stack.Navigator>
        {auth?.userData?.userId ? (
          <Stack.Group>
            <Stack.Screen
              options={{headerShown: false}}
              name="Bottom"
              component={TabNavigation}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
