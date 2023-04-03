import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../../color/Theme';

export default function Employee({route, navigation}) {
  const {name} = route.params;
  const onPressAttendance = () => {
    navigation.navigate('Attendance');
  };
  const onPressLeaves = () => {
    navigation.navigate('LeavesReport');
  };
  const onPressLeaveRequest = () => {
    navigation.navigate('ApplyForLeave');
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image style={styles.Image} source={require('../../Images/logo.png')} />
      </View>
      <Text style={styles.title}>welcome {name}</Text>
      {/* <View style={styles.innerView}>
        <TouchableOpacity onPress={onPressAttendance} style={styles.btnView}>
          <Text style={styles.btntext}> Attendance </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLeaves} style={styles.btnView}>
          <Text style={styles.btntext}> Leaves Report </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLeaveRequest} style={styles.btnView}>
          <Text style={styles.btntext}> Apply For Leave </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  innerView: {
    marginLeft: 30,
    marginBottom: 20,
  },
  title: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 30,
    color: colors.dark,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  btnView: {
    elevation: 10,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.dark,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  btntext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ImageView: {
    marginLeft: 110,
    paddingTop: 20,
    paddingBottom: 30,
  },
  Image: {
    height: 200,
    width: 200,
    borderRadius: 90,
  },
});
