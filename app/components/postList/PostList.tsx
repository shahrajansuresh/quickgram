// Global import
import {FlatList, Image, Platform, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Video from 'react-native-video';

// Contants imports
import {windowHeight} from '../../constants/styleConstant';
import {TabHeight} from '../customTab/style';
import {ScreenNames} from '../../routes/ScreenNames';

// component imports
import AddPostButton from '../addPostButton/AddPostButton';
import LikeButton from '../likeButton/LikeButton';
import PreviewModal from '../previewPost/PreviewPost';

// redux or slice imports
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
  ImageType,
  handleLike,
  postsListState,
} from '../../redux/features/slices/postSlice';
import RemoveButton from '../removeButton/RemoveButton';

// component for creating description with mentioned description in dark text
export const CreateDescription = ({
  text,
  AllFollowedUsers,
}: {
  text: string;
  AllFollowedUsers: string[];
}) => {
  let textArray = text.split(' ');
  console.log({textArray});
  return (
    <View style={styles.descriptionBox}>
      {textArray.length > 0 ? (
        textArray.map((word: string, index: number) => {
          if (AllFollowedUsers.includes(word)) {
            console.log({word});
            return (
              <Text style={styles.mentions} key={String(index)}>
                {index ? ' ' : ''}
                {word}
              </Text>
            );
          } else {
            return (
              <Text key={String(index)}>
                {index ? ' ' : ''}
                {word}
              </Text>
            );
          }
        })
      ) : (
        <Text> {text}</Text>
      )}
    </View>
  );
};

// Component for Post Image flatlist horizontal
export const Posts = ({
  postImages,
  isEditable,
  removeImages,
}: {
  postImages: ImageType[];
  isEditable: boolean;
  removeImages?: (id: string) => void;
}) => {
  const [Preview, setPreview] = useState(false); // Flag to show preview modal
  const [SelectedContent, setSelectedContent] = useState(postImages[0]); // Selected Content to show inside preview modal

  // Handler to show Hide Preview
  const HidePreview = () => setPreview((preview: boolean) => !preview);
  const ShowPreview = (item: ImageType) => {
    setSelectedContent(item);
    setPreview(true);
  };

  return (
    <>
      <PreviewModal {...{Preview, HidePreview, content: SelectedContent}} />
      <View style={[styles.hpostBox]}>
        <FlatList
          data={postImages}
          renderItem={({item, index}) => {
            if (index < 3) {
              return (
                <>
                  {isEditable ? (
                    <RemoveButton
                      onPress={() => removeImages && removeImages(item.id)}
                    />
                  ) : (
                    <></>
                  )}
                  <Pressable onPress={() => ShowPreview(item)}>
                    {item.type === 'image' || Platform.OS === 'android' ? (
                      <Image
                        source={{uri: item.Uri}}
                        style={styles.postImage}
                      />
                    ) : (
                      <Video
                        source={{uri: item.Uri}}
                        resizeMode={'contain'}
                        paused={true}
                        repeat={false}
                        style={styles.postImage}
                      />
                    )}
                  </Pressable>
                </>
              );
            } else if (index === 3) {
              return (
                <View style={styles.remainingImages}>
                  <Text> +{postImages.length - 3}</Text>
                </View>
              );
            } else {
              return <></>;
            }
          }}
          keyExtractor={item => String(item.id)}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </>
  );
};

// Component for individual post card
export const PostsCard = ({
  postItem,
  AllFollowedUsers,
}: {
  postItem: postsListState;
  AllFollowedUsers: string[];
}) => {
  const dispatch = useDispatch();
  return (
    <View style={[styles.vPostBox, styles.shadowStyle]}>
      <Posts postImages={postItem.images} isEditable={false} />
      <View style={styles.postMessage}>
        {postItem.description.length > 0
          ? postItem.description
              .split('\n')
              .map((descline, index) => (
                <CreateDescription
                  key={index.toString()}
                  text={descline}
                  AllFollowedUsers={AllFollowedUsers}
                />
              ))
          : ''}
      </View>
      <View style={styles.likeBox}>
        <LikeButton
          likes={postItem.liked}
          onPress={() => dispatch(handleLike(postItem.id))}
        />
        <Text style={styles.likesCount}> {postItem.liked ? 1 : 0} </Text>
      </View>
    </View>
  );
};

// Component for creating Post List Vertical
const PostList = ({navigation}: any) => {
  const userList = useSelector((store: RootState) => store.userList.value);
  const MentionList = userList.filter(item => {
    return item.following;
  });
  const AllFollowedUsers = MentionList.map(item => item.name);
  //   const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const {top, bottom} = insets;

  // ******************| Heights |*****************
  let MainBox =
    windowHeight - TabHeight - top - (Platform.OS === 'android' ? 30 : bottom);
  let PostBtn = 60;
  let PostBox = MainBox - PostBtn;

  // ******************| Redux Actions |*****************
  const postList = useSelector((store: RootState) => store.postList.value);

  return (
    <View style={[styles.container, {height: MainBox}]}>
      <View style={[styles.postBox, {height: PostBox}]}>
        <FlatList
          data={postList}
          renderItem={({item}) => (
            <PostsCard postItem={item} AllFollowedUsers={AllFollowedUsers} />
          )}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <AddPostButton
        height={PostBtn}
        onPress={() => {
          console.log('clicked');
          navigation.navigate(ScreenNames.CreatePost);
        }}
      />
    </View>
  );
};

export default PostList;
