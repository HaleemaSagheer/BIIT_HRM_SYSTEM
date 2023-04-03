import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import MainNavigator from './src/navigation/MainNavigator';
import Splash from './src/Screens/Main/Splash';
import Login from './src/Screens/Main/Login';
import Register from './src/Screens/Main/Register';
import ForgotPassword from './src/Screens/Main/ForgotPassword';
import ApplicantNavigator from './src/navigator/ApplicantNavigator';
import EmployeeNavigator from './src/navigator/EmployeeNavigator';
import GuardNavigator from './src/navigator/GuardNavigator';
import {NavigationContainer} from '@react-navigation/native';
import HrNavigator from './src/navigator/HrNavigator';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="ApplicantNavigator"
          component={ApplicantNavigator}
        />
        <Stack.Screen name="EmployeeNavigator" component={EmployeeNavigator} />
        <Stack.Screen name="GuardNavigator" component={GuardNavigator} />
        <Stack.Screen name="HrNavigator" component={HrNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
