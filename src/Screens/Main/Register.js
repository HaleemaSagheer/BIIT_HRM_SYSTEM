import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {React, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../color/Theme';
import IP from '../../component/IP';
import Input from '../../component/Input';
import CheckBox from '@react-native-community/checkbox';

export default function Register({navigation}) {
  const [isEducated, setIsEducated] = useState(false);
  const [isExperienced, setIsExperienced] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [cnic, setCnic] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('Applicant');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleRegister = async () => {
    try {
      if (password == confirmPassword) {
        const response = await fetch(
          `http://${IP}/BIIT_HRM_System/api/User/RegisterUser`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Fname: fname,
              Lname: lname,
              email: email,
              mobile: mobile,
              cnic: cnic,
              dob: dob,
              gender: gender,
              address: address,
              password: password,
              role: role,
            }),
          },
        );
        navigation.navigate('Login');

        const data = await response.json();

        // handle response from API here, such as displaying success message or error message
      }
    } catch (error) {
      console.error(error);
      // handle error here, such as displaying error message
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ImageView}>
          <Image
            style={styles.Image}
            source={require('../../Images/adduser.png')}
          />
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <View style={{padding:20}}>
        <TextInput
          label="FirstName"
          value={fname}
          mode={'outlined'}
          onChangeText={val => {
            setFname(val);
          }}
          left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
          style={styles.input}
        />
        {/* <Input
          title="First Name"
          placeholder={'Your First name'}
          variant="simple"
          value={fname}
          setValue={setFname}
        /> */}

        <TextInput
          label="LastName"
          value={lname}
          mode={'outlined'}
          onChangeText={val => {
            setLname(val);
          }}
          left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
          style={styles.input}
        />
        {/* <Input
          title="Last Name"
          placeholder={'Your Last name'}
          variant="simple"
          value={lname}
          setValue={setLname}
        /> */}
        <TextInput
          label="Email"
          value={email}
          mode={'outlined'}
          onChangeText={val => {
            setEmail(val);
          }}
          left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
          style={styles.input}
        />
        {/* <Input
          title="Email"
          placeholder={'Your email address'}
          variant="simple"
          icon={'email-outline'}
          value={email}
          setValue={setEmail}
        /> */}
        {/* Mobile Number */}
        <TextInput
          label="Mobile No"
          value={mobile}
          mode={'outlined'}
          onChangeText={val => {
            setMobile(val);
          }}
          left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
          style={styles.input}
        />
        {/* <Input
          title="Phone Number"
          placeholder={'Phone Number'}
          variant="simple"
          value={mobile}
          setValue={setMobile}
        /> */}
        {/* //CNIC */}
        <TextInput
          label="CNIC"
          value={cnic}
          mode={'outlined'}
          onChangeText={val => {
            setCnic(val);
          }}
          left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
          style={styles.input}
        />
        {/* <Input
          title="CNIC"
          placeholder="Enter your Cnic"
          variant="simple"
          value={cnic}
          setValue={setCnic}
        /> */}
        {/* //address */}
        <TextInput
          label="Address"
          value={address}
          mode={'outlined'}
          onChangeText={val => {
            setAddress(val);
          }}
          left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
          style={styles.input}
        />
        {/* <Input
          title="Location"
          placeholder={'Location'}
          variant="icon"
          icon="location-pin"
          value={address}
          setValue={setAddress}
        /> */}
        <TextInput
          label="Password"
          value={password}
          mode={'outlined'}
          secureTextEntry={true}
          onChangeText={val => {
            setPassword(val);
          }}
          left={<TextInput.Icon icon={'key'} iconColor="#22C55E" />}
          right={<TextInput.Icon icon="eye" />}
          style={styles.input}
        />
        <TextInput
          label=" Confirm Password"
          value={confirmPassword}
          mode={'outlined'}
          secureTextEntry={true}
          onChangeText={val => {
            setConfirmPassword(val);
          }}
          left={<TextInput.Icon icon={'key'} iconColor="#22C55E" />}
          right={<TextInput.Icon icon="eye" />}
          style={styles.input}
        />

        {/* <Input
          title="Password"
          placeholder={'Password'}
          variant="passwordIcon"
          icon="remove-red-eye"
          value={password}
          setValue={setPassword}
        /> */}
        {/* Icon Input */}
        {/* <Input
          title="Confirm Password"
          placeholder={'Confirm Password'}
          variant="passwordIcon"
          icon="remove-red-eye"
          value={confirmPassword}
          setValue={setConfirmPassword}
        /> */}
        </View>
        <View style={styles.CheckStyle}>
          <View style={{flexDirection: 'row', alignItems:"center"}}>
            <CheckBox
              style={styles.CheckStyle}
              value={isEducated}
              onValueChange={val => setIsEducated(val)}
            />
            <Text style={{color: colors.dark}}>IsEducated?</Text>
          </View>
          <View style={{flexDirection: 'row',  alignItems:"center"}}>
            <CheckBox
              style={styles.CheckStyle}
              value={isExperienced}
              onValueChange={val => setIsExperienced(val)}
            />
            <Text style={{color: colors.dark}}>hasExperience?</Text>
          </View>
        </View>
        <View style={{padding:20, justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={styles.registerbtn} onPress={handleRegister}>
          <Text style={{color:colors.white, fontWeight:"800", fontSize:22}}>Register</Text>
        </TouchableOpacity>
        </View>
        {/* <Button
          style={styles.registerbtn}
          mode="contained"
          onPress={handleRegister}>
          Register
        </Button> */}
        <View style={{flexDirection: 'row', justifyContent:"center",margin:15}}>
          <Text style={{color: '#000',fontSize: 16,}}>Already Have an account ? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.txtbtn}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop:30,
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
    height:50,
    borderRadius:20,
    width: '50%',
 
    // marginTop: 15,
    // alignSelf: 'center',
    justifyContent:"center",
    alignItems:"center",
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
    
    width: '100%',
    borderRadius: 20,
    justifyContent:"center",
    marginBottom:10,
  },
});
