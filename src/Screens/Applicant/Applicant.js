import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../color/Theme';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Applicant({route, navigation}) {
  const {name} = route.params;
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
    // <View>
    //   <Text style={styles.title}>Applicant</Text>
    //   <TouchableOpacity onPress={onPressJobs}>
    //     <Text>Jobs</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={onPressProfile}>
    //     <Text>Profile</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={onPressApplications}>
    //     <Text> My Applications</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={require('../../Images/applicant.png')}
        />
      </View>
      <Text style={styles.title}>Welcome {name}</Text>
      <View style={styles.innerView}>
        <TouchableOpacity onPress={onPressJobs} style={styles.btnView}>
          <Text style={styles.btntext}> Jobs </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressProfile} style={styles.btnView}>
          <Text style={styles.btntext}> profile </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressApplications} style={styles.btnView}>
          <Text style={styles.btntext}> Applications </Text>
        </TouchableOpacity>
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
  ImageView: {
    marginLeft: 110,
    paddingTop: 30,
    paddingBottom: 30,
  },
  Image: {
    height: 200,
    height: 200,
    borderRadius: 90,
  },
  title: {
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
});
