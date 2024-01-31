// global imports
import React, {useEffect, useState} from 'react';
import {Modal, Text, Pressable, View, Image} from 'react-native';
import Video from 'react-native-video';

// style imports
import {styles} from './style';

// type imports
import {ImageType} from '../../redux/features/slices/postSlice';
import {universalStyle} from '../../constants/universalStyles';
import Carousel from 'react-native-reanimated-carousel';
import {_DEVICE_HEIGHT, _DEVICE_WIDTH} from '../../constants/Dimensions';

export interface PreviewModalPropsType {
  Preview: boolean;
  HidePreview: () => void;
  content: ImageType[];
  selectedIndex: number; // selected index for start preview
}
const PreviewModal = ({
  Preview,
  HidePreview,
  content,
  selectedIndex,
}: PreviewModalPropsType) => {
  const [SelectedItemIndex, setSelectedItemIndex] = useState(selectedIndex);

  useEffect(() => {
    setSelectedItemIndex(selectedIndex);
  }, [selectedIndex]);

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
            <Carousel
              // loop
              width={_DEVICE_WIDTH}
              height={_DEVICE_HEIGHT / 2}
              // autoPlay={true}
              pagingEnabled
              data={content}
              defaultIndex={selectedIndex}
              scrollAnimationDuration={1000}
              onSnapToItem={index => {
                console.log(index);
                setSelectedItemIndex(index);
              }}
              renderItem={({item}) => {
                return item.type === 'image' ? (
                  <Image source={{uri: item.Uri}} style={styles.ImagePreview} />
                ) : (
                  <Video
                    source={{uri: item.Uri}}
                    resizeMode={'contain'}
                    paused={false}
                    repeat={true}
                    style={styles.ImagePreview}
                  />
                );
              }}
            />
            <Text style={[universalStyle.font, styles.textStyle]}>
              {SelectedItemIndex + 1} / {content.length}
            </Text>
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
