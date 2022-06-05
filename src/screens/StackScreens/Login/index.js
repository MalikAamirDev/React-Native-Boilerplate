import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './style';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
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
