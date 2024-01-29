// Global imports
import {StyleSheet} from 'react-native';

// constant imports
import {styleConfig, windowWidth} from '../../constants/styleConstant';

export const TabHeight = 50;

export const styles = StyleSheet.create({
  Container: {
    width: windowWidth,
    height: TabHeight,
    padding: 10,
  },
  TabBox: {
    width: (windowWidth - 40) / 2,
    padding: 5,
    borderRadius: 50,
    marginHorizontal: styleConfig.margin,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
