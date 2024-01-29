// Global imports
import React from 'react';
import {Image, Pressable, PressableProps, View} from 'react-native';

// Style imports
import {styles} from './style';

const AddPostButton = ({
  height,
  ...rest
}: {height: number} & PressableProps) => {
  return (
    <View style={[styles.buttonBox, {height: height}]}>
      <Pressable {...rest}>
        <Image source={require('../../assets/icons/AddIcon.png')} />
      </Pressable>
    </View>
  );
};

export default AddPostButton;
