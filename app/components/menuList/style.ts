import {StyleSheet} from 'react-native';
import {Appcolors} from '../../constants/styleConstant';
export const TabHeight = 50;
export const styles = StyleSheet.create({
  Menuitem: {
    justifyContent: 'flex-start',
    padding: 5,
    height: 50,
    borderBottomWidth: 1,
    borderColor: Appcolors.darkgrey,
    backgroundColor: Appcolors.lightGrey,
  },
  menuList: {
    width: '100%',
    maxHeight: 200,
    position: 'absolute',
    borderWidth: 1,
    borderColor: Appcolors.darkgrey,
  },
});
