import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';
import Input from '../../component/Input';

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
        {/* <TextInput
          label="Title"
          value={title}
          mode={'outlined'}
          onChangeText={val => {
            setTitle(val);
          }}
          style={styles.input}
        /> */}
        <Input
          title="Title"
          placeholder={'Degree Title'}
          variant="simple"
          value={title}
          setValue={setTitle}
        />
        {/* <TextInput
          label="Major"
          value={major}
          mode={'outlined'}
          onChangeText={val => {
            setMajor(val);
          }}
          style={styles.input}
        /> */}

        <Input
          title="Major"
          placeholder={'Major of Degree'}
          variant="simple"
          value={major}
          setValue={setMajor}
        />
        {/* <TextInput
          label="Board"
          value={board}
          mode={'outlined'}
          onChangeText={val => {
            setBoard(val);
          }}
          style={styles.input}
        /> */}
        <Input
          title="Board "
          placeholder={'Board'}
          variant="simple"
          value={board}
          setValue={setBoard}
        />
        {/* <TextInput
          label="Passing Year"
          value={passingYear}
          mode={'outlined'}
          onChangeText={val => {
            setPassingYear(val);
          }}
          style={styles.input}
        /> */}
        <Input
          title="Passing Year"
          placeholder={'passing Year'}
          variant="simple"
          value={passingYear}
          setValue={setPassingYear}
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
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  title: {
    marginBottom: 5,
    fontSize: 25,
    fontWeight: '800',
    color: colors.black,
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
