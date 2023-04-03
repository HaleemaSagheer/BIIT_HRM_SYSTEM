import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {React, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../color/Theme';
import DatePicker from 'react-native-date-picker';
const JobPost = ({navigation}) => {
  const [jobtitle, setJobTitle] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [jobQualification, setJobQualification] = useState('');
  const [numberOfVacencies, setNumberOfVacencies] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [jobLocation, setJobLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handlePost = async () => {
    try {
      const response = await fetch(
        `http://192.168.18.66/BIIT_HRM_System/api/Hr/JobPost`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            job_title: jobtitle,
            job_experience: jobExperience,
            job_qualification: jobQualification,
            number_of_vacancies: numberOfVacencies,
            due_date: dueDate,
            job_location: jobLocation,
            salary_range: salaryRange,
            job_type: jobType,
            job_description: jobDescription,
          }),
        },
      );
      navigation.navigate('Login');

      const data = await response.json();
    } catch (error) {
      console.error(error);
      // handle error here, such as displaying error message
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Post a new Job</Text>
        <TextInput
          label="Job Title"
          value={jobtitle}
          mode={'outlined'}
          onChangeText={val => {
            setJobTitle(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="job Experience"
          value={jobExperience}
          mode={'outlined'}
          onChangeText={val => {
            setJobExperience(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="job Qualification"
          value={jobQualification}
          mode={'outlined'}
          onChangeText={val => {
            setJobQualification(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Number Of Vacencies"
          value={numberOfVacencies}
          mode={'outlined'}
          onChangeText={val => {
            setNumberOfVacencies(val);
          }}
          style={styles.input}
        />

        <TextInput
          label="Job Location"
          value={jobLocation}
          mode="outlined"
          onChangeText={val => setJobLocation(val)}
          style={styles.input}
        />
        <TextInput
          label="Salary Range"
          value={salaryRange}
          mode="outlined"
          onChangeText={val => setSalaryRange(val)}
          style={styles.input}
        />
        <Picker
          selectedValue={jobType}
          onValueChange={val => setJobType(val)}
          style={styles.input}>
          <Picker.Item label="Job Type" value="" />
          <Picker.Item label="Full-time" value="full-time" />
          <Picker.Item label="Part-time" value="part-time" />
          <Picker.Item label="Contract" value="contract" />
          <Picker.Item label="Freelance" value="freelance" />
        </Picker>

        <TextInput
          label="Job Description"
          value={jobDescription}
          mode="outlined"
          multiline
          numberOfLines={5}
          onChangeText={val => setJobDescription(val)}
          style={styles.description}
        />

        <Text style={styles.label}>Last Date for Applying</Text>
        <DatePicker
          style={styles.datePicker}
          textColor={colors.dark}
          date={dueDate}
          mode="date"
          placeholder="Due Date"
          format="YYYY-MM-DD"
          minDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={date => {
            setDueDate(date);
          }}
        />
        <Button
          style={styles.registerbtn}
          mode="contained"
          onPress={handlePost}>
          POST
        </Button>
      </View>
    </ScrollView>
  );
};

export default JobPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  ImageView: {
    marginLeft: 110,
    paddingTop: 10,
  },
  Image: {
    height: 200,
    width: 200,
    borderRadius: 90,
    borderWidth: 10,
    borderColor: colors.dark,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,
    alignSelf: 'center',
    marginTop: 10,
  },
  txtbtn: {
    fontSize: 16,
    color: 'red',
    textDecorationLine: 'underline',
  },
  registerbtn: {
    width: '50%',
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: colors.dark,
  },
  inputdropdown: {
    height: 40,
    width: '60%',
    color: 'white',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    marginLeft: 80,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#112233',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    marginTop: 10,
    color: colors.dark,
  },
  input: {
    marginLeft: 20,
    marginTop: 20,
    height: 50,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
    color: colors.dark,
  },
  description: {
    marginLeft: 20,
    marginTop: 20,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
    color: colors.dark,
  },
});
