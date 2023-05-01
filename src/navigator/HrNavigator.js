import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../component/CustomDrawer';
import JobPost from '../Screens/HR/JobPost';
import LeavesManagement from '../Screens/HR/LeavesManagement';
import AttendanceReport from '../Screens/HR/AttendanceReport';
import HR from '../Screens/HR/HR';
import AllJobs from '../Screens/HR/AllJobs';
import JobDetails from '../Screens/HR/JobDetails';

const Drawer = createDrawerNavigator();

const HrNavigator = ({route}) => {
  const {userData} = route.params;
  return (
    <Drawer.Navigator
      initialRouteName="HR"
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawer {...props} userData={userData} />}>
      <Drawer.Screen name="HR" component={HR} initialParams={{userData}} />
      <Drawer.Screen
        name="Job Post"
        component={JobPost}
        initialParams={{userData}}
      />
      <Drawer.Screen
        name="All Jobs"
        component={AllJobs}
        initialParams={{userData}}
      />
      <Drawer.Screen
        name="Leaves Management"
        component={LeavesManagement}
        initialParams={{userData}}
      />
      <Drawer.Screen
        name="Attendance Report"
        component={AttendanceReport}
        initialParams={{userData}}
      />
      <Drawer.Screen
        options={{drawerItemStyle: {height: 0}}}
        name="JobDetails"
        component={JobDetails}
        initialParams={{userData}}
      />
    </Drawer.Navigator>
  );
};

export default HrNavigator;

const styles = StyleSheet.create({});
