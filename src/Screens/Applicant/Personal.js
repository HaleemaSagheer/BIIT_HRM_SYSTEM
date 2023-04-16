import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ToastAndroid,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, TextInput, RadioButton} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors} from '../../color/Theme';
import Experience from './Experience';
import ImagePicker from '../../component/ImagePicker';
import IP from '../../component/IP';
export default function Personal({route, navigation}) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [cnic, setCnic] = useState();
  const [dob, setDob] = useState('');
  const [mobileNo, setMobileNo] = useState();
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('male');
  const [email, setEmail] = useState('');
  const [imageData, setImageData] = useState({});
  // useEffect(() => {
  //   clearStates();
  // }, []);
  const {userData} = route.params;
  // console.log('id' + userData.id);
  const clearStates = () => {
    setFname('');
    setLname('');
    setCnic();
    setDob('');
    setMobileNo();
    setAddress('');
    setGender('');
    setImageData({});
  };
  const saveHandler = async () => {
    try {
      console.log('Entered');
      let data = new FormData();
      data.append('userId', userData.id);
      data.append('Fname', fname);
      data.append('Lname', lname);
      data.append('email', email);
      data.append('mobile', mobileNo);
      data.append('cnic', cnic);
      console.log('till CNIC');
      data.append('dob', dob);
      // data.append(
      //   'dob',
      //   `${dob.getFullYear()}-${dob.getMonth() + 1}-${dob.getDate()}`,
      // );
      // data.append('dob');
      data.append('gender', gender);
      data.append('address', address);
      console.log('till Address');
      data.append('Image', imageData);
      console.log('After Image');
      console.log(data);
      const requestOptions = {
        method: 'POST',
        body: data,
      };

      const response = await fetch(
        `http://${IP}/BIIT_HRM_System/api/Applicant/UpdateUser`,
        requestOptions,
      );
      const results = await response.json();
      ToastAndroid.show(results, ToastAndroid.SHORT);
      clearStates();
    } catch (error) {
      console.log('ERROR REQUEST', error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Personal Infromation</Text>
        <TextInput
          label="FirstName"
          value={fname}
          mode={'outlined'}
          onChangeText={val => {
            setFname(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="LastName"
          value={lname}
          mode={'outlined'}
          onChangeText={val => {
            setLname(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="CNIC"
          value={cnic}
          mode={'outlined'}
          onChangeText={val => {
            setCnic(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Mobile No"
          value={mobileNo}
          mode={'outlined'}
          onChangeText={val => {
            setMobileNo(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="DOB"
          value={dob}
          mode={'outlined'}
          onChangeText={val => {
            setDob(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Address"
          value={address}
          mode={'outlined'}
          onChangeText={val => {
            setAddress(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Email"
          value={email}
          mode={'outlined'}
          onChangeText={val => {
            setEmail(val);
          }}
          style={styles.input}
        />

        <Text style={styles.text}> Choose your Gender</Text>
        <RadioButton.Group
          value={gender}
          onValueChange={value => setGender(value)}>
          <RadioButton.Item uncheckedColor="red" label="Male" value="male" />
          <RadioButton.Item
            uncheckedColor="red"
            label="Female"
            value="female"
          />
        </RadioButton.Group>
      </View>
      <View>
        <View style={styles.imageContainer}>
          <Text style={styles.title}>Attach Your Image</Text>
          <ImagePicker imageData={imageData} setImageData={setImageData} />
          <Button mode="contained" style={styles.btn} onPress={saveHandler}>
            Save
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary,
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: '700',
    color: colors.dark,
    alignSelf: 'flex-start',
  },
  input: {
    marginLeft: 20,
    marginTop: 10,
    height: 50,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
    borderColor: colors.dark,
  },
  text: {
    color: colors.dark,
  },
  btn: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: colors.dark,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.dark,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    marginVertical: 20,
  },
  imageStyle: {
    width: '60%',
    height: 200,
    margin: 5,
    borderColor: '#472183',
    borderRadius: 10,
    borderWidth: 2,
  },
});
