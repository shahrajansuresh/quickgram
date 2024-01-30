import {StyleSheet} from 'react-native';
import {Appcolors, styleConfig} from '../../constants/styleConstant';
import {HORIZONTAL_DIMENSIONS} from '../../constants/Dimensions';

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
    width: HORIZONTAL_DIMENSIONS._20,
    height: HORIZONTAL_DIMENSIONS._20,
  },
});
