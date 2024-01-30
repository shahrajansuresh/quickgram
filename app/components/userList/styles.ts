import {StyleSheet} from 'react-native';
import {
  HORIZONTAL_DIMENSIONS,
  VERTICAL_DIMENSIONS,
  _DEVICE_WIDTH,
} from '../../constants/Dimensions';

export const styles = StyleSheet.create({
  container: {
    padding: HORIZONTAL_DIMENSIONS._5,
    paddingBottom: VERTICAL_DIMENSIONS._20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userTab: {
    height: VERTICAL_DIMENSIONS._60,
    width: _DEVICE_WIDTH - HORIZONTAL_DIMENSIONS._5 * 2,
    padding: HORIZONTAL_DIMENSIONS._20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
