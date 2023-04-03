import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {React, useEffect, useState} from 'react';

import {Button, TextInput, Searchbar} from 'react-native-paper';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {Entypo} from 'react-native-vector-icons/Entypo';
import {colors} from '../../color/Theme';
//import {con} from '../src/component/Ip';

export default function Login({navigation}) {
  //const IP = con.Ip.IP;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = async () => {
    try {
      const response = await fetch(
        `http://192.168.29.172/BIITHRMSystem/api/User/Login?email=${email}&password=${password}`,
        // `http://192.168.18.66/BIITHRMSystem/api/User/Login?email=${email}&password=${password} `,
        {
          method: 'Post',
        },
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      const role = data.role;
      // ToastAndroid.show(data, ToastAndroid.SHORT);
      //console.log(role);
      //navigation.navigate('Root', { screen: 'Settings' });
      if (role == 'Applicant') {
        navigation.navigate('ApplicantNavigator', {
          screen: 'Applicant',
          params: {name: data.name},
        });
      }
      if (role == 'Employee') {
        // navigation.navigate('Screens', {screen: 'Employee'}, {name: data.name});
        navigation.navigate('EmployeeNavigator', {
          screen: 'Employee',
          params: {name: data.name},
        });
      }
      if (role == 'Guard') {
        //navigation.navigate('Screens', {screen: 'Guard'}, {name: data.name});
        navigation.navigate('GuardNavigator', {
          screen: 'Guard',
          params: {name: data.name},
        });
      }
      if (role == 'HR') {
        //navigation.navigate('Screens', {screen: 'HR'}, {name: data.name});
        navigation.navigate('HrNavigator', {
          screen: 'HR',
          params: {name: data.name},
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  // const loginHandler = () => {
  //   navigation.navigate('DashBoard');
  // };
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
      <Text style={styles.title}>Login</Text>
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
  title: {
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
});
