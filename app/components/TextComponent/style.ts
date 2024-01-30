import {StyleSheet} from 'react-native';
import {_DEVICE_HEIGHT} from '../../constants/Dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {Appcolors} from '../../constants/styleConstant';

export const styles = StyleSheet.create({
  font: {
    fontSize: RFValue(14, _DEVICE_HEIGHT),
    color: Appcolors.fontDark,
  },
});
