import {StyleSheet} from 'react-native';
import {Appcolors} from '../../constants/styleConstant';
import {HORIZONTAL_DIMENSIONS} from '../../constants/Dimensions';
// import {windowHeight, windowWidth} from '../../constants/StyleConstant';

export const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    padding: HORIZONTAL_DIMENSIONS._5,
  },
  TextInputBox: {
    borderRadius: HORIZONTAL_DIMENSIONS._5,
    borderWidth: HORIZONTAL_DIMENSIONS._2,
    borderColor: Appcolors.disabled,
    margin: HORIZONTAL_DIMENSIONS._5,
  },
  inputLabel: {
    fontWeight: 'bold',
    padding: HORIZONTAL_DIMENSIONS._5,
  },
  dropContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: HORIZONTAL_DIMENSIONS._10,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avoidView: {
    flex: 1,
  },
});
