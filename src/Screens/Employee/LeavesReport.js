import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyTable from '../../component/MyTable';
import {colors} from '../../color/Theme';

export default function Attendance() {
  const tableHead = ['From ', , 'To', 'Leave\nType', 'Approved\nBy'];
  const tableData = [
    ['01-jan-2022', '01-jan-2022', 'Sick\nLeave', 'Dr.Munir'],
    ['01-jan-2022', '01-jan-2022', 'Earned\nLeave', 'Dr.Munir'],
    ['01-jan-2022', '01-jan-2022', 'casual\nLeave', 'Dr.Munir'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave Report</Text>
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
