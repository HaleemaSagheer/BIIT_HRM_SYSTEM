import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {colors} from '../color/Theme';

const MyTable = ({tableHead, tableData}) => {
  const widthArr = [30]; // Set the width of each column
  const heightArr = [100]; // Set the height of each row

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1}}>
        <Row
          //widthArr={widthArr}
          heightArr={heightArr}
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows
          //widthArr={widthArr}
          //heightArr={heightArr}
          data={tableData}
          textStyle={styles.text}
        />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: colors.primary,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {margin: 6, color: colors.dark},
});

export default MyTable;
