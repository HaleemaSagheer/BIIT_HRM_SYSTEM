import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {colors} from '../../color/Theme';
//import {Button} from '../src/component/Button';

export default function ApplyForLeave() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (!startDate || !endDate || !reason) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    // Here you can submit the leave application to your backend server
    // using fetch or any other library.

    // Once the leave application is submitted successfully, you can clear
    // the form and show a success message to the user.

    setStartDate('');
    setEndDate('');
    setReason('');
    Alert.alert('Success', 'Leave application submitted successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Leave Application </Text>
      <Text style={styles.label}>Start Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        placeholderTextColor={colors.secondary}
        color={colors.TextInsideInput}
        value={startDate}
        onChangeText={text => setStartDate(text)}
      />

      <Text style={styles.label}>End Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        color={colors.TextInsideInput}
        placeholderTextColor={colors.secondary}
        value={endDate}
        onChangeText={text => setEndDate(text)}
      />

      <Text style={styles.label}>Reason:</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        placeholder="Enter reason for leave"
        color={colors.TextInsideInput}
        placeholderTextColor={colors.secondary}
        value={reason}
        onChangeText={text => setReason(text)}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleSubmit} style={styles.btn}>
          Apply
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: colors.primary},
  label: {fontSize: 18, fontWeight: 'bold', marginTop: 30, color: colors.dark},
  input: {
    height: 40,
    borderColor: colors.dark,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 8,
    padding: 8,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  title: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 30,
    color: colors.dark,
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,

    alignSelf: 'center',
  },
  btn: {
    width: '60%',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: colors.dark,
  },
});
