import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const employeesData = [
  {
    id: 1,
    name: 'John Doe',
    image: require('../../Images/emp1.png'),
    selected: false,
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: require('../../Images/emp2.png'),
    selected: false,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    image: require('../../Images/emp4.png'),
    selected: false,
  },
  {
    id: 4,
    name: 'Haleema',
    image: require('../../Images/emp1.png'),
    selected: false,
  },
  {
    id: 5,
    name: 'Musa',
    image: require('../../Images/emp4.png'),
    selected: false,
  },
];

export default function Staff({navigation}) {
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [employees, setEmployees] = useState(employeesData);

  const handleSelectEmployee = (id, name) => {
    const newEmployees = employees.map(employee => {
      if (employee.id === id) {
        return {...employee, selected: true};
      } else {
        return {...employee, selected: false};
      }
    });

    setEmployees(newEmployees);

    Alert.alert(
      'Committee Head',
      `Do you want ${name} to be the committee head?`,
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('NewCommittee', {
              selectedEmployeeName: name,
            });
          },
        },
      ],
    );
  };

  const renderEmployee = ({item}) => (
    <TouchableOpacity onPress={() => handleSelectEmployee(item.id, item.name)}>
      <View style={styles.employeeContainer}>
        <Image source={item.image} style={styles.employeeImage} />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        renderItem={renderEmployee}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  employeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  employeeImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
