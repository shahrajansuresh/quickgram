import {StyleSheet} from 'react-native';
import {
  DESIGN_HEIGHT,
  HORIZONTAL_DIMENSIONS,
  VERTICAL_DIMENSIONS,
} from '../../constants/Dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {Appcolors} from '../../constants/styleConstant';

export const styles = StyleSheet.create({
  container: {
    height: VERTICAL_DIMENSIONS._30,
    minWidth: HORIZONTAL_DIMENSIONS._100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: VERTICAL_DIMENSIONS._5,
  },
  text: {
    fontWeight: '900',
    fontSize: RFValue(13, DESIGN_HEIGHT),
    color: Appcolors.fontDark,
  },
});
