// Global imports
import {View, Text, FlatList} from 'react-native';
import React from 'react';

// style imports
import {styles} from './styles';
import {universalStyle} from '../../constants/universalStyles';

// constant imports
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabHeight} from '../customTab/style';
import {Appcolors, windowHeight} from '../../constants/styleConstant';
import {
  handleFollowUser,
  usersListState,
} from '../../redux/features/slices/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

// component imports
import CustomButton from '../customButton/CustomButton';

export interface UserTabPropsType {
  userDetails: usersListState;
  handleFollow: (id: number) => void;
}

const UserTab = ({userDetails, handleFollow}: UserTabPropsType) => {
  return (
    <View style={styles.userTab}>
      <Text style={universalStyle.font}>{userDetails.name}</Text>
      <CustomButton
        {...{
          label: userDetails.following ? 'Unfollow' : 'Follow',

          onPress: () => handleFollow(userDetails.id),
          buttonColor: userDetails.following ? 'black' : Appcolors.primary,
        }}
      />
    </View>
  );
};

const UserList = () => {
  const dispatch = useDispatch();
  const AllUsers = useSelector((store: RootState) => store.userList.value);
  const insets = useSafeAreaInsets();
  const {top, bottom} = insets;
  const handleFollow = (id: number) => {
    dispatch(handleFollowUser(id));
  };
  return (
    <View
      style={[
        styles.container,
        {height: windowHeight - TabHeight - top - bottom},
      ]}>
      <FlatList
        data={AllUsers}
        renderItem={({item}) => (
          <UserTab {...{userDetails: item, handleFollow}} />
        )}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

export default UserList;
