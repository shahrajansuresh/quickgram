import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {Appcolors} from '../../constants/styleConstant';
import {
  HORIZONTAL_DIMENSIONS,
  VERTICAL_DIMENSIONS,
  _DEVICE_HEIGHT,
} from '../../constants/Dimensions';
export const styles = StyleSheet.create({
  menuItem: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: HORIZONTAL_DIMENSIONS._5,
    height: VERTICAL_DIMENSIONS._40,
    borderBottomWidth: VERTICAL_DIMENSIONS._1,
    borderColor: Appcolors.darkgrey,
    backgroundColor: Appcolors.lightGrey,
  },
  menuItemText: {
    fontSize: RFValue(14, _DEVICE_HEIGHT),
    color: Appcolors.fontDark,
  },
  menuList: {
    width: '100%',
    maxHeight: VERTICAL_DIMENSIONS._40 * 5,
    position: 'absolute',
    borderWidth: VERTICAL_DIMENSIONS._1,
    borderColor: Appcolors.darkgrey,
  },
});
