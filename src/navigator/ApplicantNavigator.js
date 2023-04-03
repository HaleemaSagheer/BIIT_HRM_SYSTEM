import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import Applicant from '../../src/Screens/Applicant/Applicant';
import Applications from '../../src/Screens/Applicant/Applications';
import Education from '../../src/Screens/Applicant/Education';
import Experience from '../Screens/Applicant/Experience';
import Jobs from '../Screens/Applicant/Jobs';
import Personal from '../Screens/Applicant/Personal';
import Profile from '../Screens/Applicant/Profile';

//const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function ApplicantNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Applicant" component={Applicant} />
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Applications" component={Applications} />
      <Stack.Screen name="Personal" component={Personal} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Experience" component={Experience} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
