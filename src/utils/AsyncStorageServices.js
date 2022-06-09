import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataFromAsyncStorage = async key => {
  try {
    const getData = await AsyncStorage.getItem(key)
      .then(res => {
        if (res != null && res != undefined) {
          let data = JSON.parse(res);
          // console.log('res in AsyncStorage Services data:', data);
          return data;
        } else if (res == null) {
          console.log('Data not found in this key');
          return;
        } else {
          console.log('key not found');
          return;
        }
      })
      .catch(error => console.log('getDataFromAsyncStorage Error:', error));
    return getData;
  } catch (error) {
    error => console.log('getDataFromAsyncStorage Catch Error:', error);
  }
};

export const setDataToAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    error => console.log('getDataFromAsyncStorage Catch Error:', error);
  }
};
