import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from '../../../utils/AsyncStorageServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signinFromAsyncStorage} from '../../../config/reduxStore/Reducers/AuthReducer';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {auth} = state;
  console.log('auth ==>', auth);
  const localUserData = {
    name: 'Aamir Malik',
    email: 'aamirmalik@gmail.com',
    mobile: '03204566546',
    imgUrl: 'https://tinyurl.com/aamirmalikprofile',
  };

  const setToken = async user => {
    console.log('set Token user:', user?.name);
    try {
      const userData = {
        userId: '3232-4564-8790-4352-4563',
        name: user?.name,
        email: user?.email,
        mobile: user?.mobile,
        imageUrl: user?.imgUrl,
      };
      await setDataToAsyncStorage('userData', userData);
      const getData = await getDataFromAsyncStorage('userData');
      dispatch(signinFromAsyncStorage(getData));
      console.log('userData:', getData);
    } catch (error) {
      console.log('setToken TryCatch Error: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <Ionicons name="ios-person-outline" size={28} color="black" />
      <Text style={styles.title}>Login</Text>
      <Button
        title="Signin"
        onPress={() =>
          // navigation.navigate('Bottom', {
          //   // screen: 'Bottom',
          // })
          setToken(localUserData)
        }
      />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login;
