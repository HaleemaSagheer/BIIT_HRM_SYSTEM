import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../color/Theme';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Applicant({ route, navigation }) {
  const {userData }= route.params;
  // console.log('Applicant');
  // console.log(userData.Fname);
  const onPressProfile = () => {
    navigation.navigate('Profile');
  };
  const onPressJobs = () => {
    navigation.navigate('Jobs');
  };
  const onPressApplications = () => {
    navigation.navigate('Applications');
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={require('../../Images/applicant.png')}
        />
      </View>
      <View style={{alignItems:"center", width:"100%" }}>
      <Text style={styles.title}>Welcome{"  "}{userData.Lname+' '+userData.Fname}</Text>
      </View>
      {/*  */}
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
  ImageView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  Image: {
    height: 200,
    height: 200,
    borderRadius: 90,
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
});
