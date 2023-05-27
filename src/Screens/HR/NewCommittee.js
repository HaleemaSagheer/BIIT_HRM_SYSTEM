import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../color/Theme';
import {IconButton} from 'react-native-paper';

export default function NewCommittee({navigation, route}) {
  const {selectedEmployeeName} = route.params;
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleSelectMembers = () => {
    navigation.navigate('Staff', {
      onSelectMembers: selected => setSelectedMembers(selected),
    });
  };

  const handleHead = () => {
    navigation.navigate('Staff');
  };

  const handleCreateCommittee = () => {
    Alert.alert('Create Committee', 'Done creating committee?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Committees', {
            committeeName: 'Example Committee',
            head: selectedEmployeeName,
            members: selectedMembers,
          });
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Committee</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput style={styles.input} placeholder="Enter Committee Name" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Head:</Text>
        <TextInput
          style={styles.input}
          placeholder="Head of Committee"
          value={selectedEmployeeName}
        />
        <Icon name="more-vert" size={24} color="black" onPress={handleHead} />
      </View>

      <View>
        <Text style={styles.membersText}>Members:</Text>
        <View style={styles.membersContainer}>
          <IconButton
            icon="plus"
            size={24}
            color="black"
            onPress={handleSelectMembers}
          />
        </View>
      </View>
      <FAB style={styles.fab} icon="check" onPress={handleCreateCommittee} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: colors.dark,
    marginRight: 10,
  },
  membersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 1,
    borderColor: colors.dark,
    paddingHorizontal: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },
});
