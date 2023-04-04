import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../color/Theme';
import {Button, TextInput} from 'react-native-paper';

const AllJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const handleDelete = () => {};
  const handleEdit = () => {};
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const response = await fetch(
        `http://192.168.18.66/BIIT_HRM_System/api/Hr/AllJobs`,
      );
      const data = await response.json();
      setJobsData(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Jobs</Text>
      <FlatList
        data={jobsData}
        renderItem={({item}) => (
          <View>
            <Text>Job Title: {item.job_title}</Text>
            <Text> Experience required:{item.job_experience}</Text>
            <Text> Qualification Required:{item.job_qualification}</Text>
            <Text> Number of Vacencies:{item.number_of_vacancies}</Text>
            <Text> Due Date:{item.due_date}</Text>
            <Text> Job Location:{item.job_location}</Text>
            <Text> Salary Range:{item.salary_range}</Text>
            <Text> Job Type:{item.job_type}</Text>
            <Text> Job Description:{item.job_description}</Text>
            <Button style={styles.btn} mode="contained" onPress={handleDelete}>
              Delete Job
            </Button>
            <Button style={styles.btn} mode="contained" onPress={handleEdit}>
              Edit Job
            </Button>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default AllJobs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,
    alignSelf: 'center',
  },
  btn: {
    width: '50%',
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: colors.dark,
  },
});
