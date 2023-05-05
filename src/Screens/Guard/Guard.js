import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';
import emp1 from '../../Images/emp1.png';

export default function Guard({navigation}) {
  const [employees, setEmployees] = useState([
    {id: 1, name: 'John Doe', timeEntries: [], clicked: false},
    {id: 2, name: 'Jane Smith', timeEntries: [], clicked: false},
    // Add more employees as needed
  ]);

  const handleEmployeePress = employeeId => {
    setEmployees(prevEmployees => {
      return prevEmployees.map(employee => {
        if (employee.id === employeeId) {
          const currentTime = new Date();
          if (
            employee.timeEntries.length > 0 &&
            !employee.timeEntries[employee.timeEntries.length - 1].timeOut
          ) {
            // Last entry is a time-in, record time-out
            employee.timeEntries[employee.timeEntries.length - 1].timeOut =
              currentTime;
          } else {
            // Record time-in
            employee.timeEntries.push({timeIn: currentTime, timeOut: null});
          }
          employee.clicked = !employee.clicked; // Toggle clicked state
        }
        return employee;
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guard Side</Text>
      {employees.map(employee => (
        <TouchableOpacity
          key={employee.id}
          style={[
            styles.employeeContainer,
            {backgroundColor: employee.clicked ? 'green' : 'red'},
          ]}
          onPress={() => handleEmployeePress(employee.id)}>
          <Image source={emp1} style={styles.employeeImage} />
          <Text style={styles.employeeName}>{employee.name}</Text>
          {employee.timeEntries.map((entry, index) => (
            <View key={index}>
              <Text style={styles.timeEntry}>
                Time In: {entry.timeIn.toString()}
              </Text>
              {entry.timeOut && (
                <Text style={styles.timeEntry}>
                  Time Out: {entry.timeOut.toString()}
                </Text>
              )}
            </View>
          ))}
          {employee.timeEntries.length === 0 && (
            <Text>No time entries yet.</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
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
  employeeContainer: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  employeeImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 10,
  },
  employeeName: {
    color: colors.secondary,
    fontWeight: 'bold',
    marginTop: 10,
  },
  timeEntry: {
    marginTop: 5,
  },
});
