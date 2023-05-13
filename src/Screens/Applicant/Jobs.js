import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  
  FlatList,
} from 'react-native';
import axios from 'axios';
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
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

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
    // try {
    //   const response = await fetch(
    //     `http://${IP}/HrmSystem/api/Job/JobGet`,
    //   );
    //   const data = await response.json();
    //   setJobsData(data);
    // } catch (error) {
    //   console.error(error);
    // }
    await axios.get('http://192.168.124.37/HrmSystem/api/Job/JobGet').then((response)=>{
      console.log(response.data)
      setJobsData(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  };

  return (
    <View style={styles.container}>
      {/* <View>
        <Image style={styles.Image} source={require('../../Images/job.png')} />
      </View> */}
      {/* <Text style={styles.title}> Jobs</Text> */}
      {/* // Searchbar */}
      {/* <View style={styles.searcbar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View> */}

      <FlatList
      columnWrapperStyle={{
        flex:1, 
        justifyContent:"space-between"
      }}
       numColumns={2}
        data={jobsData}
        renderItem={({item}) => (
          <View style={{borderColor:"blue", borderWidth:1, marginBottom:20,backgroundColor:"plum" ,borderRadius:10, width:165,padding:10,height:100 }}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{fontSize:12, fontWeight:"400",color:colors.black, marginRight:10}}>Title</Text>
            <Text style={{fontSize:14,fontWeight:"600",color:colors.black,}}>{item.Title}</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{fontSize:12,fontWeight:"400",color:colors.black, marginRight:10}}>Salary</Text>
            <Text  style={{fontSize:14, fontWeight:"600",color:colors.black, textAlign:"left"}}>{item.Salary}</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{fontSize:12, fontWeight:"400",color:colors.black, marginRight:10}}>Location</Text>
            <Text  style={{fontSize:14, fontWeight:"600",color:colors.black,}}>{item.Location}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding:10,
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
