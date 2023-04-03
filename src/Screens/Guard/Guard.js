import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../../color/Theme';

export default function Guard({navigation}) {
  const PressHandler = () => {
    navigation.navigate('MarkAttendance');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Guard Side </Text>
      <View style={{flexDirection: 'row', paddingTop: 20}}>
        <View style={styles.imgView}>
          <Image
            style={styles.employeeImage}
            source={require('../Images/emp2.png')}
          />
          <TouchableOpacity onPress={PressHandler} style={styles.btnView}>
            <Text style={styles.employeeName}> Mr.Ahsan </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.employeeImage}
            source={require('../Images/emp1.png')}
          />
          <TouchableOpacity onPress={PressHandler} style={styles.btnView}>
            <Text style={styles.employeeName}> Ms.Noor </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingTop: 20}}>
        <View style={styles.imgView}>
          <Image
            style={styles.employeeImage}
            source={require('../Images/image3.png')}
          />
          <TouchableOpacity onPress={PressHandler} style={styles.btnView}>
            <Text style={styles.employeeName}> Ms.Nadia </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.employeeImage}
            source={require('../Images/emp4.png')}
          />
          <TouchableOpacity onPress={PressHandler} style={styles.btnView}>
            <Text style={styles.employeeName}> Mr.Hassan </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  employeeImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginVertical: 10,
  },
  employeeName: {
    color: colors.secondary,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  imgView: {
    marginLeft: 30,
  },
  btnView: {
    elevation: 10,
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.dark,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    marginLeft: 10,
  },
});
