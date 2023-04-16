import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';

const Profile = ({navigation}) => {
  handlePersonal = () => {
    navigation.navigate('Personal');
  };
  handleEducation = () => {
    navigation.navigate('Education');
  };
  handleExperience = () => {
    navigation.navigate('Experience');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Complete your Profile</Text>
      <Button mode="contained" style={styles.btn} onPress={handlePersonal}>
        Personal Infromation
      </Button>
      <Button mode="contained" style={styles.btn} onPress={handleEducation}>
        Education
      </Button>
      <Button mode="contained" style={styles.btn} onPress={handleExperience}>
        Experience
      </Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary,
  },
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '700',
    color: colors.dark,
    alignSelf: 'center',
  },
  input: {
    marginLeft: 20,
    marginTop: 10,
    height: 50,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
    borderColor: colors.dark,
  },
  text: {
    color: colors.dark,
  },
  btn: {
    width: '70%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: colors.dark,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.dark,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    marginVertical: 20,
  },
  imageStyle: {
    width: '60%',
    height: 200,
    margin: 5,
    borderColor: '#472183',
    borderRadius: 10,
    borderWidth: 2,
  },
});
