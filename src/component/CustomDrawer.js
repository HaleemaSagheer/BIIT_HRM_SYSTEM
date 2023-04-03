import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '../color/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          style={{padding: 20}}
          source={require('../Images/back2.png')}>
          <Image style={styles.Img} source={require('../Images/emp1.png')} />
          <Text style={styles.txt}>cdbvsh</Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  Img: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  txt: {
    fontSize: 18,
    fontFamily: 'Roboto-medium',
  },
});
