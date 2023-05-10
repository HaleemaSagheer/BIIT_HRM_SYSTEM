import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {colors} from '../../color/Theme';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../component/Input';

export default function Experience({route}) {
  const userData = route.params;
  const [expdata, setExpData] = useState([]);
  const [organization, setOrganization] = useState('');
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
        JobTitle: title,
        Organization: organization,
        StartDate: startDate,
        EndDate: endDate,
        CurrentlyWorking: currentlyWorking,
        ApplicantId: userData.Uid,
        key: String(expdata.length),
      },
    ]);

    // Reset input fields
    setTitle('');
    setOrganization('');
    setStartDate('');
    setEndDate('');
    setCurrentlyWorking(false);
  };

  const renderExp = ({item}) => (
    <View style={styles.card}>
      <Text> Title: {item.title}</Text>
      <Text> Company: {item.organization}</Text>
      <Text> Starting Date: {item.startDate}</Text>
      <Text> Ending Date: {item.endDate}</Text>
      {/* if the currentlyWorking property is true, it indicates that the 
      item is still ongoing and there is no end date specified. If it is false, 
      it means that the item has ended and the endDate property contains the date when it ended. */}
      {item.currentlyWorking ? (
        <Text> Currently Working</Text>
      ) : (
        <Text> Ending Date: {item.endDate}</Text>
      )}
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
            value={organization}
            setValue={setOrganization}
          />
          <Input
            title="Starting Date"
            placeholder="Starting Date"
            variant="simple"
            value={startDate}
            setValue={setStartDate}
          />
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              style={styles.CheckStyle}
              value={currentlyWorking}
              onValueChange={val => setCurrentlyWorking(val)}
            />
            <Text style={{color: colors.dark}}>Still Working?</Text>
          </View>
          <Input
            title="Ending Date"
            placeholder="Ending Date"
            variant="simple"
            value={endDate}
            setValue={setEndDate}
          />
          <Button mode="contained" style={styles.btn} onPress={handleAddExp}>
            Add
          </Button>
          <View>
            {/* This checks whether there are any items in the expdata array.
             If there are, the FlatList will be rendered. If not, a simple text
             message saying "No experience added yet." will be rendered instead. */}
            {expdata.length > 0 ? (
              <FlatList
                data={expdata}
                renderItem={renderExp}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <Text style={{color: colors.dark}}>No experience added yet.</Text>
            )}
          </View>
        </View>
      )}

      {!hasExperience && (
        <Text style={{color: colors.dark}}>
          Being a fresher is absolutely fine!
        </Text>
      )}

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
