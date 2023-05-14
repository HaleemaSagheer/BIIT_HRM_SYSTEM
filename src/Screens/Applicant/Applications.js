import { StyleSheet, Text, View, ScrollView,FlatList, Touchable, TouchableOpacity } from 'react-native';
import React ,{useEffect,useState} from 'react';
import { colors } from '../../color/Theme';
import axios from 'axios';
export default function Applications() {
  const [jobsData, setJobsData] = useState([]);
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
    await axios.get(`http://192.168.93.37/HrmSystem/api/Job/JobGet`).then((response)=>{
      console.log("jOB",response.data)
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
        <View style={{borderColor:"blue", borderWidth:1, marginBottom:20,backgroundColor:"plum" ,borderRadius:10, width:165,height:100 }}>
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
          <View style={{flex:1, justifyContent:"flex-end"}}>
          <TouchableOpacity style={{padding:5,height:30,backgroundColor:"grey", justifyContent:"center",alignItems:"center", borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <Text>Apply</Text>
          </TouchableOpacity>
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
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 30,
    color: colors.primary,
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
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    marginVertical: 10,
  },
});
