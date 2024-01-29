// Global imports
import {Image, Pressable, PressableProps} from 'react-native';
import React from 'react';

// style imports
import {styles} from './styles';

const LikeButton = ({likes, ...props}: {likes: boolean} & PressableProps) => {
  return (
    <Pressable {...props}>
      <Image
        source={
          !likes
            ? require('../../assets/icons/heartOutline.png')
            : require('../../assets/icons/heartFilled.png')
        }
        style={styles.image}
      />
    </Pressable>
  );
};

export default LikeButton;
