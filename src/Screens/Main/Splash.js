import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 300);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image style={styles.image} source={require('../../Images/logo.png')} />
      </View>
      <Text style={styles.Logo}>BIIT HRM SYSTEM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
  },
  Logo: {
    fontSize: 30,
    fontWeight: '800',
    color: 'black',
  },
  ImageView: {
    marginTop: 160,
    paddingBottom: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 90,
  },
});
