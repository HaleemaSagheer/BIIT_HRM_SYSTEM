import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../color/Theme';

export default function MarkAttendance({navigation}) {
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');

  const handleTimeIn = () => {
    const now = new Date();
    const formattedTimeIn = now.toLocaleTimeString();
    setTimeIn(formattedTimeIn);
  };

  const handleTimeOut = () => {
    const now = new Date();
    const formattedTimeOut = now.toLocaleTimeString();
    setTimeOut(formattedTimeOut);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mr.Ahsan</Text>
      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={handleTimeIn} style={styles.timeButton}>
          <Text style={styles.buttonText}>Time In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTimeOut} style={styles.timeButton}>
          <Text style={styles.buttonText}>Time Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeButton: {
    backgroundColor: colors.dark,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  timeLogContainer: {
    backgroundColor: colors.light,
    padding: 20,
    borderRadius: 10,
  },
  timeLogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.dark,
  },
  timeLogText: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.dark,
  },
});
