import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyTable from '../../component/MyTable';
import {colors} from '../../color/Theme';

export default function Attendance() {
  const tableHead = ['Date', 'Time-In', 'Time-out'];
  const tableData = [
    ['01-jan-2022', '10:00AM', '01:00PM'],
    ['01-jan-2022', '01:30PM', '04:00PM'],
    ['02-jan-2022', '10:05AM', '01:00PM'],
    ['02-jan-2022', '01:35PM', '05:00PM'],
    ['03-jan-2022', '10:00AM', '01:00PM'],
    ['03-jan-2022', '01:30PM', '04:00PM'],
    ['01-jan-2022', '10:00AM', '01:00PM'],
    ['01-jan-2022', '01:30PM', '04:00PM'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <MyTable tableHead={tableHead} tableData={tableData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 30,
    color: colors.dark,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
});
