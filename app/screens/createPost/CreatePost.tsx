// global
import {View, Text, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

// styles
import {styles} from './style';

// components imports
import ImageDropBox from '../../components/imageDropBox/ImageDropBox';
import {Posts} from '../../components/postList/PostList';
import CustomButton from '../../components/customButton/CustomButton';
import MenuList from '../../components/menuList/MenuList';

// redux and slice imports
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {usersListState} from '../../redux/features/slices/userSlice';
import {
  ImageType,
  addPost,
  postsListState,
} from '../../redux/features/slices/postSlice';
import {id} from '../../utils/generateId';
import {universalStyle} from '../../constants/universalStyles';

const CreatePost = ({navigation}: any) => {
  // users and post list from redux
  const userList = useSelector((store: RootState) => store.userList.value);
  const PostList = useSelector((store: RootState) => store.postList.value);
  const dispatch = useDispatch();

  const [mentions, setmentions] = useState<string[]>([]); // saving all mention users in post description
  const [isMentioning, setIsMentioning] = useState(false); // flag to show mention user items
  const [description, setdescription] = useState<string>(''); // saving post description here
  const [postImages, setPostImages] = useState<null | ImageType[]>(null); // saving all post images here with ImageType format

  // Extracting followed users from Avaialble uselist
  const MentionList = userList.filter(item => {
    return item.following;
  });

  //  creating user name array
  const AllFollowedUsers = MentionList.map(item => item.name);

  // Handler for Opening and selecting Images from local file
  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'mixed',
      maxHeight: 2000,
      maxWidth: 2000,
      selectionLimit: postImages ? 4 - postImages.length : 4,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.errorMessage) {
      } else {
        // let Uri = response.uri || response.assets?.[0]?.uri;
        if (response.assets && Array.isArray(response.assets)) {
          let ImageList: any[] = response.assets.map(item => {
            return {
              id: id(),
              alt: item.fileName,
              type: item.type?.includes('image') ? 'image' : 'video',
              Uri: item.uri,
            };
          });

          postImages
            ? setPostImages([...postImages, ...ImageList])
            : setPostImages(ImageList);
        }
      }
    });
  };

  // Handler for post description input
  const HandleDescriptionInput = (text: any) => {
    setdescription(text);
    // condition for mentioning user if user typed '@'
    if (String(text).split(' ').includes('@') || text === '@') {
      setIsMentioning(true);
    } else if (text.length > 0) {
      isMentioning && setIsMentioning(false);

      // removing all selected mention. if user remove mentioned user
      let textArray = text.split(' ');
      if (textArray.length > 0) {
        let newMentions = textArray.filter((word: string) => {
          return AllFollowedUsers.includes(word);
        });
        setmentions(newMentions);
      }
    } else {
      isMentioning && setIsMentioning(false);
    }
  };

  // Handler for adding mentioned user to post description
  const UpdateMentions = (newMention: usersListState) => {
    let oldMentions = JSON.parse(JSON.stringify(mentions));
    oldMentions.push(newMention.name);
    setmentions(oldMentions);
    let text = description;
    let newText = text.replace(/ @(?=\s|$)/g, ` ${newMention.name} `);
    setdescription(newText);
    setIsMentioning(false);
  };

  // Handler for Adding New Post to the Redux  in PostList
  const HandleSubmit = () => {
    if (!postImages) {
      Alert.alert("Can't post", 'Please upload atleast 1 image or video', [
        {
          text: 'Cancel',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (description.length === 0) {
      Alert.alert("Can't post", 'Please write description', [
        {
          text: 'Cancel',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      let newPost: postsListState = {
        id: `Post${PostList.length + 1}`,
        description: description,
        images: postImages,
        liked: false,
      };

      dispatch(addPost(newPost));
      navigation.goBack();
    }
  };

  // Handler for removing images in post
  const removeImages = (imageId: string) => {
    if (postImages && Array.isArray(postImages)) {
      let newPostImage = postImages.filter(IndImage => imageId !== IndImage.id);
      setPostImages(newPostImage);
    }
  };

  return (
    <View style={styles.mainLayout}>
      <View style={styles.TextInputBox}>
        <Text style={[universalStyle.font, styles.inputLabel]}>
          Description
        </Text>
        <TextInput
          editable
          multiline
          autoFocus
          //   numberOfLines={3}
          onChangeText={text => HandleDescriptionInput(text)}
          value={description}
          style={styles.textInput}
        />
      </View>
      <View style={styles.TextInputBox}>
        <Text style={[universalStyle.font, styles.inputLabel]}> Media </Text>
        {postImages ? (
          <Posts
            postImages={postImages}
            isEditable={true}
            removeImages={removeImages}
          />
        ) : (
          <></>
        )}
        {!postImages ? (
          <View style={styles.dropContainer}>
            <ImageDropBox onPress={openImagePicker} />
          </View>
        ) : postImages && postImages.length !== 4 ? (
          <View style={styles.dropContainer}>
            <ImageDropBox onPress={openImagePicker} />
          </View>
        ) : (
          <></>
        )}
      </View>

      <View style={styles.ButtonContainer}>
        <CustomButton
          {...{
            label: 'Cancel',

            onPress: () => navigation.goBack(),
            buttonColor: 'red',
          }}
        />
        <CustomButton
          {...{
            label: 'Done',

            onPress: () => HandleSubmit(),
          }}
        />
      </View>
      {isMentioning ? (
        <MenuList
          menuItems={MentionList}
          selectedItems={mentions}
          keyName="id"
          valueName="name"
          EmptyText="No User Found"
          onItemSelection={item => UpdateMentions(item)}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default CreatePost;
