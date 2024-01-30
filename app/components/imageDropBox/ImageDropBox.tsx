// global imports
import {Image, Pressable, PressableProps, Text} from 'react-native';
import React from 'react';

// style imports
import {styles} from './styles';

const ImageDropBox = (props: PressableProps) => {
  return (
    <Pressable {...props} style={styles.DropBox}>
      <Image
        source={require('../../assets/icons/upload.png')}
        style={styles.image}
      />

      <Text style={styles.dropText}>
        Drop file here or{' '}
        <Text style={styles.clickText}>click here to upload</Text>{' '}
      </Text>
    </Pressable>
  );
};

export default ImageDropBox;
