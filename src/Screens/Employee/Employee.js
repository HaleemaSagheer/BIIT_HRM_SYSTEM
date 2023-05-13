import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../../color/Theme';

export default function Employee({route, navigation}) {
  const userData = route.params;
  console.log(userData.Fname);
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
      {/* <Text style={styles.title}>welcome {userData.Fname}</Text> */}
      <View style={{alignItems:"center", width:"100%" }}>
      <Text style={styles.title}>Welcome{"  "}{userData.Fname+' '+userData.Lname}</Text>
      </View>
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
    fontWeight: 'bold',
    fontSize: 25,
    color: "black",
    marginTop: 10,
    marginBottom: 10,
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
   justifyContent:"center",
   alignItems:"center",
   marginTop:20,
   marginBottom:20,
  },
  Image: {
    height: 200,
    width: 200,
    borderRadius: 90,
  },
});
