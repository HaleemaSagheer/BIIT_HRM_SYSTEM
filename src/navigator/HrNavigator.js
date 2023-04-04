import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../component/CustomDrawer';
import JobPost from '../Screens/HR/JobPost';
import LeavesManagement from '../Screens/HR/LeavesManagement';
import AttendanceReport from '../Screens/HR/AttendanceReport';
import HR from '../Screens/HR/HR';
import AllJobs from '../Screens/HR/AllJobs';

const Drawer = createDrawerNavigator();

const HrNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HR"
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HR" component={HR} />
      <Drawer.Screen name="JobPost" component={JobPost} />
      <Drawer.Screen name="AllJobs" component={AllJobs} />
      <Drawer.Screen name="LeavesManagement" component={LeavesManagement} />
      <Drawer.Screen name="AttendanceReport" component={AttendanceReport} />
    </Drawer.Navigator>
  );
};

export default HrNavigator;

const styles = StyleSheet.create({});
