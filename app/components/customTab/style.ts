// Global imports
import {StyleSheet} from 'react-native';

// constant imports
import {
  DESIGN_HEIGHT,
  HORIZONTAL_DIMENSIONS,
  VERTICAL_DIMENSIONS,
  _DEVICE_WIDTH,
} from '../../constants/Dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {Appcolors} from '../../constants/styleConstant';

export const TabHeight = VERTICAL_DIMENSIONS._50;

export const styles = StyleSheet.create({
  Container: {
    width: _DEVICE_WIDTH,
    height: TabHeight,
    paddingHorizontal: HORIZONTAL_DIMENSIONS._10,
    paddingVertical: VERTICAL_DIMENSIONS._10,
  },
  TabBox: {
    width: (_DEVICE_WIDTH - HORIZONTAL_DIMENSIONS._40) / 2,
    paddingHorizontal: HORIZONTAL_DIMENSIONS._5,
    paddingVertical: VERTICAL_DIMENSIONS._5,
    borderRadius: VERTICAL_DIMENSIONS._50,
    marginHorizontal: HORIZONTAL_DIMENSIONS._5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: RFValue(12, DESIGN_HEIGHT),
    color: Appcolors.fontDark,
  },
});
