import {StyleSheet} from 'react-native';
import {
  Appcolors,
  styleConfig,
  windowWidth,
} from '../../constants/styleConstant';
import {
  HORIZONTAL_DIMENSIONS,
  VERTICAL_DIMENSIONS,
  _DEVICE_WIDTH,
} from '../../constants/Dimensions';
export const imageButtonDimension =
  (_DEVICE_WIDTH - HORIZONTAL_DIMENSIONS._10 * 6) / 4;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: VERTICAL_DIMENSIONS._5,
  },
  hpostBox: {
    height: VERTICAL_DIMENSIONS._100,
    width: _DEVICE_WIDTH - HORIZONTAL_DIMENSIONS._5 * 6,
  },
  vPostBox: {
    minHeight: VERTICAL_DIMENSIONS._150,
    width: _DEVICE_WIDTH - HORIZONTAL_DIMENSIONS._5 * 4,
    padding: styleConfig.padding,
    backgroundColor: Appcolors.background,
    borderRadius: styleConfig.borderRadius,
    margin: VERTICAL_DIMENSIONS._5,
    borderWidth: 0.2,
    borderColor: Appcolors.disabled,
  },
  postBox: {
    paddingTop: VERTICAL_DIMENSIONS._5,
  },
  postMessage: {
    width: windowWidth - styleConfig.padding * 6,
    padding: HORIZONTAL_DIMENSIONS._5,
  },
  shadowStyle: {
    shadowRadius: VERTICAL_DIMENSIONS._5,
    shadowOpacity: 0.5,
    elevation: VERTICAL_DIMENSIONS._4,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: HORIZONTAL_DIMENSIONS._2,
      height: VERTICAL_DIMENSIONS._1,
    },
  },
  likeBox: {
    paddingLeft: HORIZONTAL_DIMENSIONS._5,
    height: VERTICAL_DIMENSIONS._20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  likesCount: {
    fontWeight: 'bold',
  },

  postImage: {
    width: imageButtonDimension,
    height: imageButtonDimension,
    marginHorizontal: VERTICAL_DIMENSIONS._5,
  },

  remainingImages: {
    width: imageButtonDimension,
    height: imageButtonDimension,
    marginHorizontal: VERTICAL_DIMENSIONS._5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appcolors.disabled,
  },
  mentions: {
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
