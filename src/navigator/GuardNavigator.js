import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomDrawer from '../component/CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Guard from '../Screens/Guard/Guard';
import MarkAttendance from '../Screens/Guard/MarkAttendance';
import AttendanceMainPage from '../Screens/Guard/AttendanceMainPage';
const Drawer = createDrawerNavigator();
export default function GuardNavigator({route}) {
  const {userData} = route.params;
  return (
    <Drawer.Navigator
      initialRouteName="Guard"
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawer {...props} userData={userData} />}>
      <Drawer.Screen name="Guard" component={Guard} initialParams={userData} />

      <Drawer.Screen
        name="AttendanceMainPage"
        component={AttendanceMainPage}
        initialParams={{userData}}
      />
      {/* <Drawer.Screen
        name="MarkAttendance"
        component={MarkAttendance}
        initialParams={{userData}}
      /> */}
      {/* <Drawer.Screen
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
      /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
