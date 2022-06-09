import {Text, View, Button} from 'react-native';

import React from 'react';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {removeSigninFromAsyncStorage} from '../../../config/reduxStore/Reducers/AuthReducer';

const Home = ({route, navigation}) => {
  const state = useSelector(state => state);
  const {auth} = state;
  const dispatch = useDispatch();
  const removeToken = () => {
    dispatch(removeSigninFromAsyncStorage());
    console.log('user Logout');
  };
  console.log('authData:', auth);
  // const {user} = route.params;
  // console.log('user ==>', user);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Home</Text> */}
      <View>
        <Text style={styles.title}>
          UserId: <Text>{auth?.userData?.userId}</Text>
        </Text>
        <Text style={styles.title}>
          Title: <Text>{auth?.userData?.name}</Text>
        </Text>
        <Text style={styles.title}>
          Email: <Text>{auth?.userData?.email}</Text>
        </Text>
        <Text style={styles.title}>
          Mobile: <Text>{auth?.userData?.mobile}</Text>
        </Text>
        <Text style={styles.title}>
          Profile: <Text>{auth?.userData?.imageUrl}</Text>
        </Text>
      </View>
      <Button onPress={removeToken} title="Log out" />
    </View>
  );
};

export default Home;
