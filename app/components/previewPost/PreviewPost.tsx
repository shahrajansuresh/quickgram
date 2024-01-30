// global imports
import React from 'react';
import {Modal, Text, Pressable, View, Image} from 'react-native';
import Video from 'react-native-video';

// style imports
import {styles} from './style';

// type imports
import {ImageType} from '../../redux/features/slices/postSlice';
import {universalStyle} from '../../constants/universalStyles';

export interface PreviewModalPropsType {
  Preview: boolean;
  HidePreview: () => void;
  content: ImageType;
}
const PreviewModal = ({
  Preview,
  HidePreview,
  content,
}: PreviewModalPropsType) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={Preview}
        onRequestClose={() => {
          HidePreview();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {content.type === 'image' ? (
              <Image source={{uri: content.Uri}} style={styles.ImagePreview} />
            ) : (
              <Video
                source={{uri: content.Uri}}
                resizeMode={'contain'}
                paused={false}
                repeat={true}
                style={styles.ImagePreview}
              />
            )}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => HidePreview()}>
              <Text style={[universalStyle.font, styles.textStyle]}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PreviewModal;
