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
  filterText: string; // text for filtering users from the list
  selectedItems: string[]; // all selected menus
  EmptyText: string; // text to show when list is not available
  onItemSelection: (selectedItem: any) => void;
  closeMenu: () => void;
}

const MenuList = ({
  menuItems,
  keyName,
  filterText,
  valueName,
  selectedItems,
  EmptyText,
  onItemSelection,
  closeMenu,
}: MenuListProps) => {
  const [AvailableItems, setAvailableItems] = useState(menuItems);

  // To remove selected item from the available list .
  useEffect(() => {
    if (selectedItems.length > 0 && menuItems.length > 0) {
      let newList = menuItems.filter(menu => {
        return (
          !selectedItems.includes(menu[valueName]) &&
          menu[valueName].includes(filterText.substring(1))
        );
      });

      if (newList.length === 0) {
        closeMenu();
      } else {
        setAvailableItems(newList);
      }
    } else if (filterText.substring(1).length > 0) {
      let newList = menuItems.filter(menu => {
        return menu[valueName].includes(filterText.substring(1));
      });
      if (newList.length === 0) {
        closeMenu();
      } else {
        setAvailableItems(newList);
      }
    }

    return () => {};
  }, [menuItems, selectedItems, valueName, filterText, closeMenu]);
  const keyboardHeight = useKeyboard();
  return (
    <View style={[styles.menuList, {bottom: keyboardHeight}]}>
      {AvailableItems.length > 0 ? (
        <FlatList
          data={AvailableItems}
          keyboardShouldPersistTaps="always"
          renderItem={({item}) => (
            <Pressable
              onPress={() => onItemSelection(item)}
              style={styles.menuItem}>
              <Text style={styles.menuItemText}>{item[valueName]}</Text>
            </Pressable>
          )}
          keyExtractor={item => String(item[keyName])}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Pressable disabled style={styles.menuItem}>
          <Text style={styles.menuItemText}>{EmptyText}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default MenuList;
