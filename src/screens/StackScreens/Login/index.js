import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-person-outline" size={28} color="black" />
      <Text style={styles.title}>Login</Text>
      <Button
        title="Go to Bottom Tab Screen"
        onPress={() =>
          navigation.navigate('Bottom', {
            // screen: 'Bottom',
          })
        }
      />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login;
