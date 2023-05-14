import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { React, useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../color/Theme';
import IP from '../../component/IP';
import Input from '../../component/Input';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { Entypo } from 'react-native-vector-icons/Entypo';

//import {con} from '../src/component/Ip';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getUser=async()=>{
    await axios.get(`http://192.168.93.37/HrmSystem/api/Job/JobGet`).then((response)=>{
      console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })  }
    useEffect(()=>{
      getUser()
    },[])
  const loginHandler = async () => {

    console.log(email)
    console.log(password)
    await axios.get(`http://192.168.154.37/HrmSystem/api/User/Login?email=${email}&password=${password}`).then((response) => {
      console.log(response.data.role)
      if (response.data.role == 'applicant') {
        navigation.navigate('ApplicantNavigator', { userData: response.data });
      }
      if (response.data.role == 'employee') {
        navigation.navigate('EmployeeNavigator', { userData: response.data });
      }
      if (response.data.role == 'guard') {
        navigation.navigate('GuardNavigator', { userData: response.data });
      }

      if (response.data.role == 'hr') {
        navigation.navigate('HrNavigator', { userData: response.data });
      }

    }).catch((error) => {
      console.log("error",error)
    })
  }


  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const handleForgotPassword=()=>{
    navigation.navigate('ForgotPassword');
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={require('../../Images/login.png')}
        />
      </View>
      <Text style={styles.title}>Login</Text>

<View style={{padding:20,}}>

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
      <View style={{ alignItems: "flex-end", marginTop: 10, }}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={{ fontWeight: 'bold', color: '#000' }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={loginHandler} style={{marginTop:20,width:"100%", backgroundColor:colors.dark,borderRadius:20, justifyContent:"center",alignItems:"center", height:50,}}>
          <Text style={{ color: colors.white, fontWeight: "800", fontSize: 22 }}>Login</Text>
        </TouchableOpacity>
      </View>

</View >



 
      {/* <Button mode="contained" style={styles.btn} onPress={loginHandler}>
        Login
      </Button> */}

      <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginTop:20,}}>
      
        <Text style={{ color: '#000', fontSize: 16, }}>Don't have an account ? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.txtbtn}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 10 }}>
         <View style={{paddingTop: 10}}>

      </View>
  
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  
  },
  CheckStyle: {
    marginLeft: 10,
    color: colors.dark,
  },
  ImageView: {
   justifyContent:"center",
   alignItems:"center",
   marginTop:40,
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
    marginTop: 10,
  },
  txtbtn: {
    fontSize: 16,
    color: 'red',
    textDecorationLine: 'underline',
  },
  registerbtn: {
    width: '50%',
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: colors.dark,
  },
  inputdropdown: {
    height: 40,
    width: '60%',
    color: 'white',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    marginLeft: 80,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#112233',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {

    height: 50,
    width: '100%',
    borderRadius: 5,
   
  },
});
