import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';

export default function Education() {
  const [title, setTitle] = useState('');
  const [major, setMajor] = useState('');
  const [board, setBoard] = useState('');
  const [passingYear, setPassingYear] = useState();
  const [edudata, setEduData] = useState([]);

  const renderEdu = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.txt}> Title:{item.title}</Text>
      <Text style={styles.txt}>Major : {item.major}</Text>
      <Text style={styles.txt}>Board : {item.board}</Text>
      <Text style={styles.txt}>Passing Year : {item.passingYear}</Text>
    </View>
  );
  const handleSubmit = () => {};
  const handleAddedu = () => {
    setEduData([
      ...edudata,
      {
        title: title,
        major: major,
        board: board,
        Year: passingYear,
        key: String(edudata.length),
      },
    ]);
    setTitle('');
    setMajor('');
    setBoard('');
    setPassingYear();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educational Infromation </Text>
      <View>
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
        <TextInput
          label="Passing Year"
          value={passingYear}
          mode={'outlined'}
          onChangeText={val => {
            setPassingYear(val);
          }}
          style={styles.input}
        />
        <Button mode="contained" style={styles.btn} onPress={handleAddedu}>
          Add
        </Button>
      </View>
      <FlatList data={edudata} renderItem={renderEdu} />
      <Button mode="contained" style={styles.btn} onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    marginTop: 10,

    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,
    alignSelf: 'flex-start',
  },
  card: {
    borderWidth: 2,
    borderColor: colors.dark,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    marginBottom: 10,
  },
  btn: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: colors.dark,
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
  txt: {
    color: colors.light,
  },
});
