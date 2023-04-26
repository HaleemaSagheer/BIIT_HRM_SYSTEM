import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';
import CheckBox from '@react-native-community/checkbox';

export default function Experience() {
  const [expdata, setExpData] = useState([]);
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const handleSubmit = () => {};
  const handleAddExp = () => {
    setExpData([
      ...expdata,
      {
        title: title,
        company: company,
        duration: duration,
        key: String(expdata.length),
      },
    ]);
    setTitle('');
    setCompany('');
    setDuration('');
    setCurrentlyWorking(false);
  };
  const renderExp = ({item}) => (
    <View style={styles.card}>
      <Text> Title:{item.title}</Text>
      <Text>Company:{item.company}</Text>
      <Text>Duration:{item.duration}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience </Text>
      <View>
        <TextInput
          label="Title of job"
          value={title}
          mode={'outlined'}
          onChangeText={val => {
            setTitle(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Company"
          value={company}
          mode={'outlined'}
          onChangeText={val => {
            setCompany(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Starting Date"
          value={startDate}
          mode={'outlined'}
          onChangeText={val => {
            setStartDate(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Ending Date"
          value={endDate}
          mode={'outlined'}
          onChangeText={val => {
            setEndDate(val);
          }}
          style={styles.input}
        />
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            style={styles.CheckStyle}
            value={currentlyWorking}
            onValueChange={val => setCurrentlyWorking(val)}
          />
          <Text style={{color: colors.dark}}>Still Working?</Text>
        </View>
        <Button mode="contained" style={styles.btn} onPress={handleAddExp}>
          Add
        </Button>
      </View>
      <FlatList data={expdata} renderItem={renderExp} />
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
  CheckStyle: {
    marginLeft: 10,
    color: colors.dark,
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
