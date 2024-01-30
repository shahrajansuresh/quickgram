// Global imports
import {FlatList, Pressable, Text, View} from 'react-native';
import React from 'react';

// style imports
import {styles} from './style';

// constant imports
import {Appcolors} from '../../constants/styleConstant';

export interface CustomTabListPropsType {
  tabList: string[];
  updateTab: (tabName: string) => void;
  selectedTab: string;
}

export interface CustomTabPropsType {
  title: string;
  updateTab: (tabName: string) => void;
  selectedTab: string;
}
// Individual tab compoent for TabList
const Tab = ({title, updateTab, selectedTab}: CustomTabPropsType) => {
  return (
    <Pressable
      onPress={() => {
        updateTab(title);
      }}
      style={() => [
        {
          backgroundColor:
            selectedTab === title ? Appcolors.disabled : undefined,
          ...styles.TabBox,
        },
      ]}>
      <Text style={styles.tabText}> {title}</Text>
    </Pressable>
  );
};

const CustomTabList = ({
  tabList,
  updateTab,
  selectedTab,
}: CustomTabListPropsType) => {
  return (
    <View style={styles.Container}>
      <FlatList
        data={tabList}
        horizontal
        renderItem={({item}) => (
          <Tab {...{title: item, updateTab, selectedTab}} />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default CustomTabList;
