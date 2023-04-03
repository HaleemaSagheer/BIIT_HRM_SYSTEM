import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../component/CustomDrawer';
import Employee from '../Screens/Employee/Employee';
import Attendance from '../Screens/Employee/Attendance';
import LeavesReport from '../Screens/Employee/LeavesReport';
import ApplyForLeave from '../Screens/Employee/ApplyForLeave';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();

const EmployeeNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Employee"
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Employee"
        component={Employee}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Attendance"
        component={Attendance}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="notebook-check-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="LeavesReport"
        component={LeavesReport}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="file-alt" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ApplyForLeave"
        component={ApplyForLeave}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="file-signature" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default EmployeeNavigator;
