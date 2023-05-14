import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
//import {Button, card, Searchbar} from 'react-native-paper';
import { colors } from '../../color/Theme';
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
import DocumentPicker from 'react-native-document-picker';
export default function Jobs({ navigation, route }) {
  const [jobId, setJobId]=useState("");
  const { userData } = route.params;
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [jobsData, setJobsData] = useState([]);
  const onChangeSearch = query => setSearchQuery(query);
  const [selectedindex,setSelectedIndex]=useState("");
  const ApplyHandler = () => { };
  const handleViewJob = ({ item }) => {
    navigation.navigate('JobDetails', {
      item,
    });
  };
  // Function to handle CV attachment
  const handleAttachCV = async () => {
    await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
    }).then((response) => {
       setSelectedFile(response[0].name);
      console.log(response[0].name)
     
    }).catch((error) => {
      console.log(error)
    })
 
  };
  // Render file preview based on the selected file type
  const renderFilePreview = () => {
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        return <Text>{selectedFile.name}</Text>;
      } else if (selectedFile.type && selectedFile.type.includes('image')) {
        return (
          <Image source={{ uri: selectedFile.uri }} style={styles.previewImage} />
        );
      }
    }
    return <Text>No file selected</Text>;
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
    await axios.get(`http://${IP}/HrmSystem/api/Job/JobGet`).then((response) => {
      console.log("jOB", response.data)
      setJobsData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  };
  const handleSubmit = async () => {
  

        await axios.post(`http://192.168.154.37/HrmSystem/api/JobApplication/JobApplicationPost`,
        {
          
          DocumentPath:selectedFile,
          Uid:userData.Uid,
          Jid:jobId,

          
        }
  
      ).then((response) => {
        console.log(response.data)
    
           
       
      }).catch((erorr) => {
        console.log(erorr)
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
          flex: 1,
          justifyContent: "space-between"
        }}
        numColumns={2}
        data={jobsData}
        renderItem={({ item, index}) => (
          <View style={{ borderColor: "blue", borderWidth: 1, marginBottom: 20, backgroundColor: "plum", borderRadius: 10, width: 165, height: 180 }}>
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "400", color: colors.black, marginRight: 10 }}>Title</Text>
                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.black, }}>{item.Title}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "400", color: colors.black, marginRight: 10 }}>Salary</Text>
                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.black, textAlign: "left" }}>{item.Salary}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "400", color: colors.black, marginRight: 10 }}>Location</Text>
                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.black, }}>{item.Location}</Text>
              </View>
          
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity onPress={()=>{
                console.log(item.Jid)
                setSelectedIndex(index)
                console.log(index)
                handleAttachCV();
                setJobId(item.Jid)
              }} style={{ padding: 5, height: 30, backgroundColor: "grey", justifyContent: "center", alignItems: "center",borderBottomLeftRadius:selectedindex==index ?0:10, borderBottomRightRadius:selectedindex==index?0:10  }}>
                <Text>Upload CV</Text>
              </TouchableOpacity>
            </View>
         {selectedindex===index&&   <View style={{  alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "400", color: colors.black, marginRight: 10 }}>Upload file:</Text>
                <Text style={{ fontSize: 12, fontWeight: "600", color: colors.black,flexWrap:"wrap" }}>{selectedFile}</Text>
              </View>}
              {(selectedindex===index && selectedFile) && <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity onPress={()=>{
                handleSubmit()
              }} style={{ padding: 5, height: 30, backgroundColor: "grey", justifyContent: "center", alignItems: "center",borderBottomLeftRadius:10, borderBottomRightRadius:10  }}>
                <Text>Apply</Text>
              </TouchableOpacity>
            </View>   }
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
    padding: 10,
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
    padding: 20,
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
