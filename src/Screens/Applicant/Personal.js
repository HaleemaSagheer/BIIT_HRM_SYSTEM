import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, RadioButton} from 'react-native-paper';
import {colors} from '../../color/Theme';

export default function Personal() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [cnic, setCnic] = useState();
  const [dob, setDob] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [city, setcity] = useState('');
  const [gender, setGender] = useState('male');
  const [email, setEmail] = useState('');
  const saveHandler = () => {};
  return (
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
        label="City"
        value={city}
        mode={'outlined'}
        onChangeText={val => {
          setcity(val);
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
        <RadioButton.Item uncheckedColor="red" label="Female" value="female" />
      </RadioButton.Group>
      <Button mode="contained" style={styles.btn} onPress={saveHandler}>
        save
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
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
    borderRadius: 5,
    alignSelf: 'center',
    borderColor: colors.dark,
  },
  text: {
    color: colors.dark,
    fontWeight: 'bold',
  },
  btn: {
    width: '60%',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: colors.dark,
  },
});
