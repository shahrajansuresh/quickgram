// Global imports
import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {useState} from 'react';

//  Components import
import CustomTabList from '../../components/customTab/CustomTab';
import UserList from '../../components/userList/UserList';
import PostList from '../../components/postList/PostList';

//  Style imports
import {styles} from './style';

// Constants import
import {Appcolors} from '../../constants/styleConstant';

const Home = ({navigation}: any) => {
  // ------------------------------| State and handlers for Tab  |------------------------------
  const tabList = ['People', 'Posts'];
  const [selectedTab, setSelectedTab] = useState<string>(tabList[0]);
  const updateTab = (tabName: string) => setSelectedTab(() => tabName);

  // ***************************| Rendering part |***************************
  return (
    <SafeAreaView style={styles.mainLayout}>
      <StatusBar
        animated={true}
        backgroundColor={Appcolors.background}
        barStyle="dark-content"
      />
      <View style={styles.mainLayout}>
        <CustomTabList {...{tabList, selectedTab, updateTab}} />
        {selectedTab === 'Posts' ? (
          <PostList {...{navigation}} />
        ) : (
          <UserList />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
