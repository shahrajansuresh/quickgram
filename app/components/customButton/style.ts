import {StyleSheet} from 'react-native';
import {styleConfig} from '../../constants/styleConstant';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: styleConfig.borderRadius,
  },
  text: {
    fontWeight: '900',
  },
});
