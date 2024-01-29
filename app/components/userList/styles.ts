import {StyleSheet} from 'react-native';
import {styleConfig, windowWidth} from '../../constants/styleConstant';

export const styles = StyleSheet.create({
  container: {
    padding: styleConfig.padding,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userTab: {
    height: 70,
    width: windowWidth - styleConfig.padding * 2,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
