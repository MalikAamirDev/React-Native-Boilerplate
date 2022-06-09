import {View, Text, Pressable} from 'react-native';
import React, {Children} from 'react';
import styles from './style';

const MButton = (title, onPress) => {
  return (
    <Pressable
      onPress={onPress()}
      style={({pressed}) => [
        styles.container,
        {backgroundColor: pressed ? 'corallight' : 'coral'},
      ]}>
      <Text>Signin</Text>
    </Pressable>
  );
};

export default MButton;
