import {StyleSheet} from 'react-native';
import {Appcolors, styleConfig} from '../../constants/styleConstant';

export const styles = StyleSheet.create({
  buttonBox: {
    position: 'absolute',
    backgroundColor: Appcolors.lightGrey,
    borderRadius: styleConfig.borderRadius,
    top: 0,
    right: 0,
    zIndex: 1,
  },
  image: {
    width: 20,
    height: 20,
  },
});
