import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {colors} from '../../color/Theme';

export default function Profile({navigation}) {
  const onPressPersonal = () => {
    navigation.navigate('Personal');
  };
  const onPressEducation = () => {
    navigation.navigate('Education');
  };
  const onPressExperience = () => {
    navigation.navigate('Experience');
  };
  const onPressOthers = () => {
    navigation.navigate('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={require('../../Images/adduser.png')}
        />
      </View>
      <Text style={styles.title}>Profile</Text>
      <Button mode="contained" onPress={onPressPersonal} style={styles.btnView}>
        Personal Information
      </Button>
      <Button
        mode="contained"
        onPress={onPressEducation}
        style={styles.btnView}>
        Educational Information
      </Button>
      <Button mode="contained" onPress={onPressPersonal} style={styles.btnView}>
        Experiences
      </Button>
      <Button mode="contained" onPress={onPressPersonal} style={styles.btnView}>
        Other Information
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  ImageView: {
    marginLeft: 110,
    paddingTop: 20,
  },
  Image: {
    marginTop: 20,
    height: 200,
    width: 200,
    borderRadius: 90,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#000',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  btnView: {
    elevation: 10,
    height: 60,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.dark,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
});
