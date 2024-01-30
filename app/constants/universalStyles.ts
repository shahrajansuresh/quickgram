import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {_DEVICE_HEIGHT} from './Dimensions';

export const universalStyle = StyleSheet.create({
  font: {
    fontSize: RFValue(14, _DEVICE_HEIGHT),
  },
});
