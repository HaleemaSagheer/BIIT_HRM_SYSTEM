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
import {colors} from '../color/Theme';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function ApplicantNavigator({route}) {
  //ye route wahaa use hta jahaa py hum koi params recive krr rhy hty ye userData kahaa sy aye ga
  const {userData} = route.params;

  return (
    <Drawer.Navigator
      initialRouteName="Applicant"
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Applicant"
        component={Applicant}
        initialParams={userData}
      />

      <Drawer.Screen name="Jobs" component={Jobs} initialParams={{userData}} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        initialParams={{userData}}
      />
      <Drawer.Screen
        name="Applications"
        component={Applications}
        initialParams={{userData}}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
          headerShown: true,
          headerBackground: () => (
            <View style={{backgroundColor: colors.lighter, flex: 1}} />
          ),
        }}
        name="Personal"
        component={Personal}
        initialParams={{userData}}
      />
      <Drawer.Screen
        //options={{drawerItemStyle: {height: 0}}}
        options={{
          drawerItemStyle: {height: 0},
          headerShown: true,
          headerBackground: () => (
            <View style={{backgroundColor: colors.lighter, flex: 1}} />
          ),
        }}
        name="Education"
        component={Education}
        initialParams={{userData}}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
          headerShown: true,
          headerBackground: () => (
            <View style={{backgroundColor: colors.lighter, flex: 1}} />
          ),
        }}
        name="Experience"
        component={Experience}
        initialParams={{userData}}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
          headerShown: true,
          headerBackground: () => (
            <View style={{backgroundColor: colors.lighter, flex: 1}} />
          ),
        }}
        name="JobDetails"
        component={JobDetails}
        initialParams={{userData}}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
          headerShown: true,
          headerBackground: () => (
            <View style={{backgroundColor: colors.lighter, flex: 1}} />
          ),
        }}
        name="Apply"
        component={Apply}
        initialParams={{userData}}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
