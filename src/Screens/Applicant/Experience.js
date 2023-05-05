import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../component/Input';

export default function Experience({route}) {
  const userData = route.params;
  const [expdata, setExpData] = useState([]);
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [hasExperience, setHasExperience] = useState(false);
  const [isFresher, setIsFresher] = useState(false);

  const handleSubmit = async () => {
    try {
      if (isFresher) {
        // Handle submission for fresher
        console.log('Submit as Fresher');
      } else {
        // Handle submission for experienced user
        console.log('Submit with Experience');
        console.log(expdata);
      }
    } catch (error) {
      console.log('ERROR REQUEST', error);
    }
  };

  const handleAddExp = () => {
    setExpData([
      ...expdata,
      {
        title: title,
        company: company,
        startDate: startDate,
        endDate: endDate,
        currentlyWorking: currentlyWorking,
        ApplicantId: userData.Uid,
        key: String(expdata.length),
      },
    ]);

    // Reset input fields
    setTitle('');
    setCompany('');
    setStartDate('');
    setEndDate('');
    setCurrentlyWorking(false);
  };

  const renderExp = ({item}) => (
    <View style={styles.card}>
      <Text> Title: {item.title}</Text>
      <Text> Company: {item.company}</Text>
      <Text> Starting Date: {item.startDate}</Text>
      <Text> Ending Date: {item.endDate}</Text>
      <Text> Still Working: {item.currentlyWorking}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience </Text>

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <CheckBox
          style={styles.CheckStyle}
          value={hasExperience}
          onValueChange={val => {
            setHasExperience(val);
            setIsFresher(false);
          }}
        />
        <Text style={{color: colors.dark}}>Have Experience?</Text>
      </View>

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <CheckBox
          style={styles.CheckStyle}
          value={isFresher}
          onValueChange={val => {
            setIsFresher(val);
            setHasExperience(false);
          }}
        />
        <Text style={{color: colors.dark}}>Fresher</Text>
      </View>

      {hasExperience && (
        <View>
          <Input
            title="Job"
            placeholder="Title of job"
            variant="simple"
            value={title}
            setValue={setTitle}
          />
          <Input
            title="Company"
            placeholder="Company Name"
            variant="simple"
            value={company}
            setValue={setCompany}
          />
          <Input
            title="Starting Date"
            placeholder="Starting Date"
            variant="simple"
            value={startDate}
            setValue={setStartDate}
          />
          <Input
            title="Ending Date"
            placeholder="Ending Date"
            variant="simple"
            value={endDate}
            setValue={setEndDate}
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
          {expdata.length > 0 ? (
            <FlatList data={expdata} renderItem={renderExp} />
          ) : (
            <Text>No experience added yet.</Text>
          )}
        </View>
      )}

      {!hasExperience && <Text>Being a fresher is absolutely fine!</Text>}

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
  CheckStyle: {
    marginLeft: 10,
    color: colors.dark,
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
