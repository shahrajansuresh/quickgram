// Global imports
import React from 'react';
import {Image, Pressable, PressableProps} from 'react-native';

// Style imports
import {styles} from './style';

const RemoveButton = (props: PressableProps) => {
  return (
    <Pressable {...props} style={styles.buttonBox}>
      <Image
        source={require('../../assets/icons/minus-sign-icon.png')}
        style={styles.image}
      />
    </Pressable>
  );
};

export default RemoveButton;
