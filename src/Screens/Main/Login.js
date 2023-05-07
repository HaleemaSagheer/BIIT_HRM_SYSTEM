import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { React, useEffect, useState } from 'react';
import IP from '../../component/IP';
import Input from '../../component/Input';

import { Button, TextInput, Searchbar } from 'react-native-paper';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { Entypo } from 'react-native-vector-icons/Entypo';
import { colors } from '../../color/Theme';
//import {con} from '../src/component/Ip';

export default function Login({ navigation }) {
  //const IP = con.Ip.IP;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = async () => {
    //console.log('Entered');
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
        navigation.navigate('ApplicantNavigator', { userData: data.login });
      }
      if (data.login.role == 'Employee') {
        navigation.navigate('EmployeeNavigator', { userData: data.login });
      }
      if (data.login.role == 'Guard') {
        navigation.navigate('GuardNavigator', { userData: data.login });
      }

      if (data.login.role == 'HR') {
        navigation.navigate('HrNavigator', { userData: data.login });
      }
    } catch (err) {
      console.log(err);
    }
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
      <View style={{ padding: 20, }}>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          mode={'outlined'}
          onChangeText={val => {
            setEmail(val);
          }}
          left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
        />

        {/* <Input
    

        title="Email"
        placeholder={'Enter your password '}
        variant="simple"
        value={email}
        setValue={setEmail}
      /> */}
        {/* Password Input */}
        {/* <Input
        title="Password"
        placeholder={'************'}
        variant="passwordIcon"
        icon="remove-red-eye"
        value={password}
        setValue={setPassword}
      /> */}

        <TextInput
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
        />
        <View style={{ alignItems: "flex-end", marginTop: 10, }}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={{ fontWeight: 'bold', color: '#000' }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={loginHandler} style={styles.btn}>
            <Text style={{ color: colors.white, fontWeight: "800", fontSize: 22 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* BUTTON */}

      <View style={styles.InnerView}>
        <Text style={{ color: '#000', fontSize: 16, }}>Don't have an account ? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.txtbtn}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{paddingTop: 10}}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={{marginLeft: '60%', fontWeight: 'bold', color: '#000'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    // paddingHorizontal: 50,
    // paddingVertical: 50,
  },
  ImageView: {

    marginTop: 50,

    justifyContent: "center",
    alignItems: "center"

  },
  Image: {
    height: 200,
    width: 200,
    borderRadius: 90,
    borderWidth: 10,
    borderColor: colors.dark,
  },
  logintitle: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,

    alignSelf: 'center',
  },
  input: {
    width: '100%',
    borderRadius: 20,
    justifyContent: "center",
    marginBottom: 10,

  },
  btn: {
    backgroundColor: colors.dark,
    marginTop: 20,
    height: 50,
    width: '50%',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: '800',
  },
  txtbtn: {
    fontSize: 16,
    color: 'red',
    textDecorationLine: 'underline',
  },
  InnerView: {
    flexDirection: 'row',
    justifyContent: "center",
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
