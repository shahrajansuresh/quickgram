import {StyleSheet} from 'react-native';
import {
  HORIZONTAL_DIMENSIONS,
  VERTICAL_DIMENSIONS,
  _DEVICE_WIDTH,
} from '../../constants/Dimensions';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: VERTICAL_DIMENSIONS._22,
  },
  modalView: {
    width: '100%',
    height: '100%',
    margin: HORIZONTAL_DIMENSIONS._20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopLeftRadius: VERTICAL_DIMENSIONS._20,
    borderTopRightRadius: VERTICAL_DIMENSIONS._20,
    padding: HORIZONTAL_DIMENSIONS._36,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: VERTICAL_DIMENSIONS._2,
    },
    shadowOpacity: 0.25,
    shadowRadius: VERTICAL_DIMENSIONS._5,
    elevation: VERTICAL_DIMENSIONS._5,
  },
  button: {
    borderRadius: VERTICAL_DIMENSIONS._20,
    padding: HORIZONTAL_DIMENSIONS._10,
    elevation: VERTICAL_DIMENSIONS._2,
    position: 'absolute',
    bottom: VERTICAL_DIMENSIONS._50,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: VERTICAL_DIMENSIONS._15,
    textAlign: 'center',
  },

  ImagePreview: {
    width: _DEVICE_WIDTH - HORIZONTAL_DIMENSIONS._20,
    minHeight: VERTICAL_DIMENSIONS._300,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
