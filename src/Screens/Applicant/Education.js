import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';
import Input from '../../component/Input';
import IP from '../../component/IP';

export default function Education({route}) {
  const {userData} = route.params;
  console.log("Education",userData.Educations)
  const [title, setTitle] = useState('');
  const [major, setMajor] = useState('');
  const [board, setBoard] = useState('');
  const [passingYear, setPassingYear] = useState(0);
  const [edudata, setEduData] = useState(userData.Educations);
  // console.log(userData.Uid);

  const renderEdu = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.txt}> Title:{item.Title}</Text>
      <Text style={styles.txt}>Major : {item.Degree}</Text>
      <Text style={styles.txt}>Board : {item.Board}</Text>
      <Text style={styles.txt}>Passing Year : {item.Enddate}</Text>
    </View>
  );
  const handleSubmit = async () => {
    console.log('Entered');
    try {
      console.log(edudata);
      const response = await fetch(
        `http://${IP}/BIIT_HRM_System/api/Applicant/AddEducation`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(edudata),
        },
      );
      //  To Check what i am sending in payLoad
      console.log('Payload:', {
        educationData: edudata,
      });
      const data = await response.json();
      console.log('data', data);
    } catch (error) {
      console.log('ERROR REQUEST', error);
    }
  };

  const handleAddedu = () => {
    setEduData([
      ...edudata,
      {
        Title: title,
        Major: major,
        Board: board,
        Year: passingYear,
        ApplicantId: userData.Uid,
      },
    ]);
    setTitle('');
    setMajor('');
    setBoard('');
    setPassingYear(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educational Infromation </Text>
      <View>
        <Input
          title="Title"
          placeholder={'Degree Title'}
          variant="simple"
          value={title}
          setValue={setTitle}
        />
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
      <FlatList keyExtractor={item => item.id} data={edudata} renderItem={renderEdu} />
      {/* <Button mode="contained" style={styles.btn} onPress={handleSubmit}>
        Submit
      </Button> */}
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
    // marginLeft: 10,
    // marginRight: 10,
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
