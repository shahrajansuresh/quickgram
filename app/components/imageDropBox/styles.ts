import {StyleSheet} from 'react-native';
import {Appcolors, styleConfig} from '../../constants/styleConstant';
import {
  HORIZONTAL_DIMENSIONS,
  VERTICAL_DIMENSIONS,
  _DEVICE_HEIGHT,
} from '../../constants/Dimensions';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  DropBox: {
    height: VERTICAL_DIMENSIONS._130,
    width: HORIZONTAL_DIMENSIONS._130,
    backgroundColor: Appcolors.lightGrey,
    paddingHorizontal: HORIZONTAL_DIMENSIONS._5,
    paddingVertical: VERTICAL_DIMENSIONS._5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: styleConfig.borderRadius,
    borderWidth: 1,
    borderColor: Appcolors.darkgrey,
  },
  image: {
    width: HORIZONTAL_DIMENSIONS._100,
    height: VERTICAL_DIMENSIONS._100,
  },
  clickText: {
    color: Appcolors.primary,
    fontSize: RFValue(12, _DEVICE_HEIGHT),
  },
  dropText: {
    color: Appcolors.darkgrey,
    fontWeight: 'bold',
    fontSize: RFValue(12, _DEVICE_HEIGHT),
  },
});
