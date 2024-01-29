import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {useKeyboard} from '../../hooks/keyboardHeight';

export interface MenuItems {
  [key: string]: any;
}
export interface MenuListProps {
  keyName: string; // to provide key to flatlist
  valueName: string; // to get value while selection of item
  menuItems: MenuItems[]; // menu list for selection
  selectedItems: string[]; // all selected menus
  EmptyText: string; // text to show when list is not available
  onItemSelection: (selectedItem: any) => void;
}

const MenuList = ({
  menuItems,
  keyName,
  valueName,
  selectedItems,
  EmptyText,
  onItemSelection,
}: MenuListProps) => {
  const [AvailableItems, setAvailableItems] = useState(menuItems);

  // To remove selected item from the available list .
  useEffect(() => {
    if (selectedItems.length > 0 && menuItems.length > 0) {
      let newList = menuItems.filter(
        menu => !selectedItems.includes(menu[valueName]),
      );

      setAvailableItems(newList);
    }

    return () => {};
  }, [menuItems, selectedItems, valueName]);
  const keyboardHeight = useKeyboard();
  console.log(keyboardHeight);
  return (
    <View style={[styles.menuList, {bottom: keyboardHeight}]}>
      {AvailableItems.length > 0 ? (
        <FlatList
          data={AvailableItems}
          keyboardShouldPersistTaps="always"
          renderItem={({item}) => (
            <Pressable
              onPress={() => onItemSelection(item)}
              style={styles.Menuitem}>
              <Text>{item[valueName]}</Text>
            </Pressable>
          )}
          keyExtractor={item => String(item[keyName])}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Pressable disabled style={styles.Menuitem}>
          <Text>{EmptyText}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default MenuList;
