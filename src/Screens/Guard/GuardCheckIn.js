import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import moment from 'moment';

const GuardCheckIn = ({selectedEmployee, isCheckIn = true}) => {
  const [userlist, setUserlist] = useState([]);
  const [checkInTime, setCheckInTime] = useState(moment().format('HH:mm'));
  const [checkInDate, setCheckInDate] = useState(moment().format('YYYY-MM-DD'));
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (isInitial) {
      setCheckInTime(moment().format('HH:mm'));
      setCheckInDate(moment().format('YYYY-MM-DD'));
      setIsInitial(false);
    }
  }, []);

  const fetchUser = async id => {
    try {
      const response = await fetch(
        `http://${ip}/HRM_System/api/User/NewUserGet?id=${id}`,
      );
      const data = await response.json();
      if (response.ok) {
        setUserlist(Array.isArray(data) ? data : [data]);
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  const addAttendance = async () => {
    const url = `http://${ip}/HRM_System/api/Attendance/AttendancePost`;
    const data = {
      Uid: selectedEmployee.uid,
      checkin: checkInTime,
      date: checkInDate,
      status: 'present',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  useEffect(() => {
    fetchUser(selectedEmployee.uid);
  }, [selectedEmployee.uid]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Check In Screen</Text>
      {userlist.length > 0 ? (
        userlist.map((user, index) => (
          <View key={index} style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              {user.image ? (
                <Image
                  source={{uri: imagepath + user.image}}
                  style={styles.image}
                />
              ) : (
                <Icon name="person" size={100} color="gray" />
              )}
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>
                {user.fname} {user.lname}
              </Text>
              <Text style={styles.label}>Number:</Text>
              <Text style={styles.value}>{user.mobile}</Text>
              <TextInput
                style={styles.input}
                value={checkInTime}
                onChangeText={setCheckInTime}
                placeholder="Check-in Time"
              />
              <TextInput
                style={styles.input}
                value={checkInDate}
                onChangeText={setCheckInDate}
                placeholder="Check-in Date"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  addAttendance();
                  navigation.pop();
                }}>
                <Text style={styles.buttonText}>
                  {isCheckIn ? 'CHECK IN' : 'CHECK OUT'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  cardContainer: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    marginTop: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  input: {
    marginTop: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
  },
  button: {
    marginTop: 16,
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GuardCheckIn;
