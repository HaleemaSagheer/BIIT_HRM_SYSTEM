import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {React, useEffect, useState} from 'react';
import IP from '../../component/IP';
import Input from '../../component/Input';
import {Button, TextInput, Searchbar} from 'react-native-paper';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {Entypo} from 'react-native-vector-icons/Entypo';
import {colors} from '../../color/Theme';
//import axios from 'axios';
//import {con} from '../src/component/Ip';

export default function Login({navigation}) {
  //const IP = con.Ip.IP;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = async () => {
    console.log('Entered');
    try {
      const response = await fetch(
        `http://${IP}/BIIT_HRM_System/api/User/Login?email=${email}&password=${password}`,
        // `http://192.168.18.66/BIITHRMSystem/api/User/Login?email=${email}&password=${password} `,
        {
          method: 'Post',
        },
      );

      const data = await response.json();
      console.log(response);
      console.log(data.login.role);
      if (data.login.role == 'Applicant') {
        navigation.navigate('ApplicantNavigator', {userData: data.login});
      }
      if (data.login.role == 'Employee') {
        navigation.navigate('EmployeeNavigator', {userData: data.login});
      }
      if (data.login.role == 'Guard') {
        navigation.navigate('GuardNavigator', {userData: data.login});
      }

      if (data.login.role == 'HR') {
        navigation.navigate('HrNavigator', {userData: data.login});
      }
    } catch (err) {
      console.log(err);
    }

    // await axios
    //   .get(
    //     `http://${IP}/HrmSystem/api/User/Login?email=${email}&password=${password}`,
    //   )
    //   .then(response => {
    //     console.log(response.data.role);
    //     if (response.data.role == 'applicant') {
    //       navigation.navigate('ApplicantNavigator', {userData: response.data});
    //     }
    //     if (response.data.role == 'employee') {
    //       navigation.navigate('EmployeeNavigator', {userData: response.data});
    //     }
    //     if (response.data.role == 'guard') {
    //       navigation.navigate('GuardNavigator', {userData: response.data});
    //     }

    //     if (response.data.role == 'hr') {
    //       navigation.navigate('HrNavigator', {userData: response.data});
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={require('../../Images/login.png')}
        />
      </View>
      <Text style={styles.logintitle}>Login</Text>
      {/* <TextInput
        style={styles.input}
        label="Email"
        value={email}
        mode={'outlined'}
        onChangeText={val => {
          setEmail(val);
        }}
        left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
      /> */}
      <Input
        title="Email"
        placeholder={'Enter your password '}
        variant="simple"
        value={email}
        setValue={setEmail}
      />
      {/* Password Input */}
      <Input
        title="Password"
        placeholder={'************'}
        variant="passwordIcon"
        icon="remove-red-eye"
        value={password}
        setValue={setPassword}
      />

      {/* <TextInput
        label="Password"
        value={password}
        mode={'outlined'}
        secureTextEntry={true}
        left={<TextInput.Icon icon={'key'} iconColor="#22C55E" />}
        right={<TextInput.Icon icon="eye" />}
        onChangeText={val => {
          setPassword(val);
        }}
        style={styles.input}
      /> */}

      {/* BUTTON */}
      <Button mode="contained" style={styles.btn} onPress={loginHandler}>
        Login
      </Button>
      <View style={styles.InnerView}>
        <Text style={{color: '#000'}}>Don't have an account ? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.txtbtn}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 10}}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={{marginLeft: '60%', fontWeight: 'bold', color: '#000'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  ImageView: {
    marginLeft: 110,
    paddingTop: 20,
    paddingBottom: 30,
  },
  Image: {
    height: 200,
    width: 200,
    borderRadius: 90,
    borderWidth: 10,
    borderColor: colors.dark,
  },
  logintitle: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,

    alignSelf: 'center',
  },
  input: {
    marginLeft: 20,
    marginTop: 30,
    height: 50,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: colors.dark,
    marginTop: 30,
    height: 50,
    width: '50%',
    alignSelf: 'center',
    fontWeight: '800',
  },
  txtbtn: {
    fontSize: 16,
    color: 'red',
    textDecorationLine: 'underline',
  },
  InnerView: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 70,
    color: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 30,
  },
  termsText: {
    color: colors.dark,
    fontSize: 14,
  },
  primaryText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 20,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomStripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  lightText: {
    color: colors.dark,
  },
});
