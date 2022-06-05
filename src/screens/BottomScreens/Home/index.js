import {Text, View} from 'react-native';

import React from 'react';
import styles from './style';

const Home = ({route, navigation}) => {
  // const {user} = route.params;
  // console.log('user ==>', user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default Home;
