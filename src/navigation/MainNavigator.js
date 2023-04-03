import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../Screens/Main/Login';
import Register from '../Screens/Main/Register';
import ForgotPassword from '../Screens/Main/ForgotPassword';
import Splash from '../Screens/Main/Splash';
import Applicant from '../Screens/Applicant/Applicant';
import Jobs from '../Screens/Applicant/Jobs';
import Profile from '../Screens/Applicant/Profile';
import Employee from '../Screens/Employee/Employee';
import Education from '../Screens/Applicant/Education';
import Experience from '../Screens/Applicant/Experience';
import Personal from '../Screens/Applicant/Personal';
import Attendance from '../Screens/Employee/Attendance';
import LeavesReport from '../Screens/Employee/LeavesReport';
import ApplyForLeave from '../Screens/Employee/ApplyForLeave';

import Guard from '../Screens/Guard/Guard';
import MarkAttendance from '../Screens/Guard/MarkAttendance';
import Admin from '../../Screns1/Admin';
import Hr from '../../Screns1/Hr';
import Applications from '../Screens/Applicant/Applications';

const {Navigator, Screen} = createNativeStackNavigator();
//const backIcon = require('../../assets/back_arrow.png');

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Splash" component={Splash} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Applicant" component={Applicant} />
        <Screen name="Jobs" component={Jobs} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Education" component={Education} />
        <Screen name="Experience" component={Experience} />
        <Screen name="Personal" component={Personal} />
        <Screen name="Employee" component={Employee} />
        <Screen name="Attendance" component={Attendance} />
        <Screen name="LeavesReport" component={LeavesReport} />
        <Screen name="ApplyForLeave" component={ApplyForLeave} />
        <Screen name="Applications" component={Applications} />
        <Screen name="Guard" component={Guard} />
        <Screen name="MarkAttendance" component={MarkAttendance} />
        <Screen name="Admin" component={Admin} />
        <Screen name="Hr" component={Hr} />
      </Navigator>
    </NavigationContainer>
  );
}
