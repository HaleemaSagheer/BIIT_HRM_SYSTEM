import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput, Card, Paragraph} from 'react-native-paper';
import {colors} from '../../color/Theme';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const JobDetails = ({navigation, route}) => {
  const {item} = route.params;

  const handleApply = ({item}) => {
    navigation.navigate('Apply', {item});
  };
  return (
    <View style={styles.container}>
      <Text> Job Detail</Text>
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
              <Text style={{marginLeft: 10}}>Salary {item.salary_range}</Text>
            </Paragraph>
            <Paragraph>
              <Ionicons
                name="ios-briefcase-outline"
                size={15}
                color={colors.dark}
              />
              <Text style={{color: colors.light}}>Job Type:</Text>
              <Text>{item.job_type}</Text>
            </Paragraph>
            <Paragraph>
              <Text style={{color: colors.light}}>Number of Vacencies:</Text>
              <Text>{item.number_of_vacancies}</Text>
            </Paragraph>
            <Paragraph>
              <Text style={{color: colors.light}}>Experience required : </Text>
              <Text>{item.job_experience}</Text>
            </Paragraph>
            <Paragraph>
              <Text style={{color: colors.light}}>Qualification Required:</Text>
              <Text>{item.job_qualification}</Text>
            </Paragraph>
            <Paragraph>
              <Text style={{color: colors.light}}>Due Date:</Text>
              <Text>{item.due_date}</Text>
            </Paragraph>
            <Paragraph>
              <Text style={{color: colors.light}}>Job Description:</Text>
              <Text>{item.job_description}</Text>
            </Paragraph>
          </View>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          {/* <View 
          > */}
          <Button
            mode="contained"
            onPress={() => handleApply({item})}
            style={{backgroundColor: 'blue'}}>
            Apply
          </Button>
          {/* </View> */}
        </Card.Actions>
      </Card>
    </View>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    borderColor: colors.dark,
  },
  actioncontainer: {
    flex: 1,
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardActions: {
    marginTop: 5,
  },
});
