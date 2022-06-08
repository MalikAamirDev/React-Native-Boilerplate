import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../../screens/BottomScreens/Home';
import More from '../../../screens/BottomScreens/More';
import {POPPINS_REGULAR} from '../../../Theme/fonts';
import {SECONDARY_COLOR} from '../../../Theme/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          initialRouteName: 'Home',
          tabBarLabelStyle: {
            fontFamily: POPPINS_REGULAR,
            fontSize: 9,
            color: 'black',
          },
          tabBarLabelPosition: 'below-icon',
          headerStyle: {
            backgroundColor: SECONDARY_COLOR,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'More') {
              iconName = focused ? 'options' : 'options-outline';
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        })}>
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name={'home'} color={'coral'} size={22} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
