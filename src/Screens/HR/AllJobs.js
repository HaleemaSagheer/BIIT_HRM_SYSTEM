import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../color/Theme';
import {Button, TextInput, Card, Paragraph} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AllJobs = ({navigation}) => {
  const [jobsData, setJobsData] = useState([]);
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

  const handleDelete = () => {};
  const handleEdit = () => {};
  const handleViewJob = ({item}) => {
    navigation.navigate('JobDetails', {
      item,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Jobs</Text>
      <FlatList
        data={jobsData}
        renderItem={({item}) => (
          <Card style={styles.cardContainer}>
            <Card.Title title={item.job_title} titleStyle={styles.cardtitle} />
            <Card.Content style={styles.cardContent}>
              <View>
                <Paragraph>
                  <EvilIcons name="location" size={20} color={colors.dark} />
                  <Text style={{marginLeft: 5}}>{item.job_location}</Text>
                </Paragraph>
                <Paragraph>
                  <Fontisto name="wallet" size={15} color={colors.dark} />
                  <Text style={{marginLeft: 10}}>
                    Salary {item.salary_range}
                  </Text>
                </Paragraph>
                <Paragraph>
                  <Ionicons
                    name="ios-briefcase-outline"
                    size={15}
                    color={colors.dark}
                  />
                  <Text>{item.job_type}</Text>
                </Paragraph>
              </View>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button mode="contained" onPress={() => handleViewJob({item})}>
                ViewJob
              </Button>
              <Button mode="contained" onPress={() => handleDelete({item})}>
                Delete
              </Button>
              <Button mode="contained" onPress={() => handleEdit({item})}>
                Edit
              </Button>
            </Card.Actions>
          </Card>
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
    borderColor: colors.dark,
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
  cardContainer: {
    padding: 10,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    color: colors.primary,
  },
  cardContent: {
    marginBottom: 2,
    fontSize: 10,
  },
  cardActions: {
    marginTop: 5,
  },
  cardtitle: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
});
