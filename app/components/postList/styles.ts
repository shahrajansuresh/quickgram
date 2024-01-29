import {StyleSheet} from 'react-native';
import {
  Appcolors,
  styleConfig,
  windowWidth,
} from '../../constants/styleConstant';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
  hpostBox: {
    height: 100,
    width: windowWidth - styleConfig.padding * 6,
  },
  vPostBox: {
    minHeight: 150,
    width: windowWidth - styleConfig.padding * 4,
    padding: styleConfig.padding,
    backgroundColor: Appcolors.background,
    borderRadius: styleConfig.borderRadius,
    margin: 5,
    borderWidth: 0.2,
    borderColor: Appcolors.disabled,
  },
  postBox: {
    paddingTop: 5,
  },
  postMessage: {
    width: windowWidth - styleConfig.padding * 6,
    padding: 5,
  },
  shadowStyle: {
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 4,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 2,
      height: 1,
    },
  },
  likeBox: {
    paddingLeft: 5,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  likesCount: {
    fontWeight: 'bold',
  },

  postImage: {
    width: 90,
    height: 100,
    margin: 5,
  },

  remainingImages: {
    width: 90,
    height: 90,
    margin: 5,
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
