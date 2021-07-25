import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image } from 'react-native';

const MenuContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        resizeMode='cover'
        style={{ width: '100%', height: 140 }}
        source={require('../../assets/icon.png')}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default MenuContent;