// Global imports
import {Text, Pressable, PressableProps} from 'react-native';
import React from 'react';

// Style imports
import {styles} from './style';

// Contants imports
import {Appcolors} from '../../constants/styleConstant';

const CustomButton = ({
  label,
  buttonColor,
  textColor,
  ...rest
}: {
  label: string;
  buttonColor?: string;
  textColor?: string;
} & PressableProps) => {
  return (
    <Pressable
      {...{
        style: [
          styles.container,
          {backgroundColor: buttonColor ?? Appcolors.primary},
        ],
        ...rest,
      }}>
      <Text style={[styles.text, {color: textColor ?? 'white'}]}>{label}</Text>
    </Pressable>
  );
};

export default CustomButton;
