import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';

export default function Education() {
  const [title, setTitle] = useState('');
  const [major, setMajor] = useState('');
  const [board, setBoard] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Education</Text>
      <TextInput
        label="Title"
        value={title}
        mode={'outlined'}
        onChangeText={val => {
          setTitle(val);
        }}
        style={styles.input}
      />
      <TextInput
        label="Major"
        value={major}
        mode={'outlined'}
        onChangeText={val => {
          setMajor(val);
        }}
        style={styles.input}
      />
      <TextInput
        label="Board"
        value={board}
        mode={'outlined'}
        onChangeText={val => {
          setBoard(val);
        }}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,
    alignSelf: 'center',
  },
  input: {
    marginLeft: 20,
    marginTop: 30,
    height: 50,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
    borderColor: colors.dark,
  },
});
