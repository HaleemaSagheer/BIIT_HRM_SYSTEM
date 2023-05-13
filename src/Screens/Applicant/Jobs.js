import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {React, useState, useEffect} from 'react';
//import {Button, card, Searchbar} from 'react-native-paper';
import {colors} from '../../color/Theme';
import {
  Button,
  TextInput,
  Card,
  Paragraph,
  Searchbar,
} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IP from '../../component/IP';

export default function Jobs({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobsData, setJobsData] = useState([]);
  const onChangeSearch = query => setSearchQuery(query);
  const ApplyHandler = () => {};
  const handleViewJob = ({item}) => {
    navigation.navigate('JobDetails', {
      item,
    });
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    try {
      const response = await fetch(
        `http://${IP}/BIIT_HRM_System/api/Hr/AllJobs`,
      );
      const data = await response.json();
      setJobsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.Image} source={require('../../Images/job.png')} />
      </View>
      <Text style={styles.title}> Jobs</Text>
      {/* // Searchbar */}
      <View style={styles.searcbar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

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
            </Card.Actions>
          </Card>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  ImageView: {
    marginLeft: 110,

    paddingBottom: 30,
  },
  Image: {
    paddingTop: 10,
    height: 200,
    height: 200,
    width: 480,
  },
  btn: {
    width: '60%',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: colors.dark,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 30,
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  scroll: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 30,
    color: '#000',
    marginTop: 20,

    alignSelf: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    justifyContent: 'space-between',
    padding: 10,
  },

  searcbar: {
    padding:20,
    marginBottom: 20,
    borderRadius: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
