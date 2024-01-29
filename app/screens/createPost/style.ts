import {StyleSheet} from 'react-native';
import {Appcolors} from '../../constants/styleConstant';
// import {windowHeight, windowWidth} from '../../constants/StyleConstant';

export const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    padding: 5,
  },
  TextInputBox: {
    borderWidth: 0.5,
    borderColor: Appcolors.disabled,
    margin: 5,
  },
  inputLabel: {
    fontWeight: 'bold',
    padding: 5,
  },
  dropContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
