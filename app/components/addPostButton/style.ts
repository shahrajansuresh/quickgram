import {StyleSheet} from 'react-native';
import {
  HORIZONTAL_DIMENSIONS,
  VERTICAL_DIMENSIONS,
  _DEVICE_WIDTH,
} from '../../constants/Dimensions';

export const styles = StyleSheet.create({
  buttonBox: {
    width: _DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postButton: {
    width: HORIZONTAL_DIMENSIONS._40,
    height: VERTICAL_DIMENSIONS._40,
  },
});
