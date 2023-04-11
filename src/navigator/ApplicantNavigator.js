import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Applicant from '../../src/Screens/Applicant/Applicant';
import Applications from '../../src/Screens/Applicant/Applications';
import Education from '../../src/Screens/Applicant/Education';
import Experience from '../Screens/Applicant/Experience';
import Jobs from '../Screens/Applicant/Jobs';
import JobDetails from '../Screens/Applicant/JobDetails';
import Apply from '../Screens/Applicant/Apply';
import Personal from '../Screens/Applicant/Personal';
import Profile from '../Screens/Applicant/Profile';
import CustomDrawer from '../component/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function ApplicantNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Applicant"
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Applicant" component={Applicant} />
      <Stack.Screen name="Jobs" component={Jobs} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Applications" component={Applications} />
      <Drawer.Screen name="Personal" component={Personal} />
      <Drawer.Screen name="Education" component={Education} />
      <Drawer.Screen name="Experience" component={Experience} />
      <Drawer.Screen
        options={{drawerItemStyle: {height: 0}}}
        name="JobDetails"
        component={JobDetails}
      />
      <Drawer.Screen
        options={{drawerItemStyle: {height: 0}}}
        name="Apply"
        component={Apply}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
