import {StyleSheet} from 'react-native';
import {Appcolors, styleConfig} from '../../constants/styleConstant';

export const styles = StyleSheet.create({
  DropBox: {
    height: 150,
    width: 150,
    backgroundColor: Appcolors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: styleConfig.borderRadius,
    borderWidth: 0.5,
    borderColor: Appcolors.darkgrey,
  },
  image: {
    width: 100,
    height: 100,
  },
  clickText: {
    color: Appcolors.primary,
  },
  dropText: {
    color: Appcolors.darkgrey,
  },
});
