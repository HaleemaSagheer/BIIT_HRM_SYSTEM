import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, FAB} from 'react-native-paper';
import {colors} from '../../color/Theme';

export default function Apply({route}) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [cnic, setCnic] = useState();
  const [dob, setDob] = useState();
  const [mobileNo, setMobileNo] = useState();
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.job_title}</Text>
      <View>
        <Text style={styles.subtitle}>Personal Infromation</Text>
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
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
        position
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    borderColor: colors.dark,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,
    alignSelf: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
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
  fab: {
    marginTop: 10,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
