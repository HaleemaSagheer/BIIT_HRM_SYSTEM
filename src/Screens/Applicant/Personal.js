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
import DatePicker from 'react-native-date-picker';
import {IconButton} from 'react-native-paper';
import Input from '../../component/Input';
export default function Personal({route, navigation}) {
  const {userData} = route.params;
  // console.log('Checking');
  // console.log(userData.Fname);
  // console.log('Data');
  // console.log(userData);
  // console.log(userData.address);
  const [fname, setFname] = useState(userData.Fname);
  const [lname, setLname] = useState(userData.Lname);
  const [cnic, setCnic] = useState(userData.cnic);
  const [dob, setDob] = useState(userData.dob);
  const [mobileNo, setMobileNo] = useState(userData.mobile);
  const [address, setAddress] = useState(userData.address);
  const [gender, setGender] = useState(userData.gender);
  const [email, setEmail] = useState(userData.email);
  const [imageData, setImageData] = useState({
    uri: `http://192.168.0.191/BIIT_HRM_System/Images/${userData.Image}`,
  });
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  console.log(`${JSON.stringify(userData)}/${userData.Image}`);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  // const {userData} = route.params;
  // // console.log('id' + userData.id);
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
      //console.log('Entered');
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
      <Text style={styles.title}>Personal Infromation</Text>
      {/* <TextInput
          label="FirstName"
          value={fname}
          mode={'outlined'}
          onChangeText={val => {
            setFname(val);
          }}
          style={styles.input}
        /> */}
      <Input
        title="First Name"
        placeholder={'Your First name'}
        variant="simple"
        value={fname}
        setValue={setFname}
      />

      {/* <TextInput
          label="LastName"
          value={lname}
          mode={'outlined'}
          onChangeText={val => {
            setLname(val);
          }}
          style={styles.input}
        /> */}
      <Input
        title="Last Name"
        placeholder={'Your Last name'}
        variant="simple"
        value={lname}
        setValue={setLname}
      />
      {/* <TextInput
        label="CNIC"
        value={cnic}
        mode={'outlined'}
        onChangeText={val => {
          setCnic(val);
        }}
        style={styles.input}
      /> */}
      <Input
        title="CNIC"
        placeholder="Enter your Cnic"
        variant="simple"
        value={cnic}
        setValue={setCnic}
      />
      {/* <TextInput
        label="Mobile No"
        value={mobileNo}
        mode={'outlined'}
        onChangeText={val => {
          setMobileNo(val);
        }}
        style={styles.input}
      /> */}
      <Input
        title="Phone Number"
        placeholder={'Phone Number'}
        variant="simple"
        value={mobileNo}
        setValue={setMobileNo}
      />
      {/* <TextInput
          label="DOB"
          value={dob}
          mode={'outlined'}
          onChangeText={val => {
            setDob(val);
          }}
          style={styles.input}
        /> */}
      {/* <View style={styles.dateContainer}>
          <Text style={{color: colors.dark, fontSize: 15}}>DOB :</Text>
          <Text>{date.toLocaleDateString()}</Text>
          <IconButton
            icon="clipboard-text-clock-outline"
            mode="contained"
            iconColor={colors.dark}
            size={30}
            onPress={() => setOpen(!open)}
          />
        </View>
        {open && (
          <DatePicker
            testID="datePicker"
            value={date}
            mode={'date'}
            onChange={onChange}
            display={'inline'}
          />
        )} */}
      <Text style={styles.text}>Date Of Birth</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.darkText}>{date.toLocaleDateString()}</Text>
        <IconButton
          icon="clipboard-text-clock-outline"
          mode="contained"
          iconColor={colors.dark}
          size={30}
          onPress={() => setShow(!show)}
        />
      </View>
      {show && (
        <DatePicker
          modal
          mode={'date'}
          open={show}
          date={date}
          onConfirm={date => {
            setShow(false);
            setDate(date);
          }}
          onCancel={() => {
            setShow(false);
          }}
        />
      )}
      {/* <TextInput
        label="Address"
        value={address}
        mode={'outlined'}
        onChangeText={val => {
          setAddress(val);
        }}
        style={styles.input}
      /> */}
      <Input
        title="Address"
        placeholder={'Address'}
        variant="icon"
        icon="location-pin"
        value={address}
        setValue={setAddress}
      />
      {/* <TextInput
        label="Email"
        value={email}
        mode={'outlined'}
        onChangeText={val => {
          setEmail(val);
        }}
        style={styles.input}
      /> */}
      <Input
        title="Email"
        placeholder={'Your email address'}
        variant="simple"
        icon={'email-outline'}
        value={email}
        setValue={setEmail}
      />

      <Text style={styles.text}> Choose your Gender</Text>
      <RadioButton.Group
        value={gender}
        onValueChange={value => setGender(value)}>
        <RadioButton.Item uncheckedColor="red" label="Male" value="male" />
        <RadioButton.Item uncheckedColor="red" label="Female" value="female" />
      </RadioButton.Group>

      <View>
        <View style={styles.imageContainer}>
          <Text style={styles.text}>Attach Your Image</Text>
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
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: colors.primary,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    alignSelf: 'center',
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
    fontWeight: '700',
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  darkText: {
    color: colors.black,
  },
});
