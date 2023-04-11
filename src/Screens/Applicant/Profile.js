import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, RadioButton} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors} from '../../color/Theme';
import Experience from './Experience';
import ImagePicker from '../../component/ImagePicker';

export default function Profile({navigation}) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [cnic, setCnic] = useState();
  const [dob, setDob] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [city, setcity] = useState('');
  const [gender, setGender] = useState('male');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [data, setData] = useState([]);
  const [expdata, setExpData] = useState([]);
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [filePath, setFilePath] = useState({});
  const [imageData, setImageData] = useState({});

  const saveHandler = () => {};
  const handleAdd = () => {
    setData([...data, {key: String(data.length), value: education}]);
    setEducation('');
  };

  const handleAddExp = () => {
    setExpData([
      ...expdata,
      {
        title: title,
        company: company,
        duration: duration,
        key: String(expdata.length),
      },
    ]);
    setTitle('');
    setCompany('');
    setDuration('');
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text>{item.value}</Text>
    </View>
  );

  const renderExp = ({item}) => (
    <View style={styles.card}>
      <Text> Title:{item.title}</Text>
      <Text>Company:{item.company}</Text>
      <Text>Duration:{item.duration}</Text>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Personal Infromation</Text>
        <TextInput
          label="FirstName"
          value={fname}
          mode={'outlined'}
          onChangeText={val => {
            setFname(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="LastName"
          value={lname}
          mode={'outlined'}
          onChangeText={val => {
            setLname(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="CNIC"
          value={cnic}
          mode={'outlined'}
          onChangeText={val => {
            setCnic(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Mobile No"
          value={mobileNo}
          mode={'outlined'}
          onChangeText={val => {
            setMobileNo(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="DOB"
          value={dob}
          mode={'outlined'}
          onChangeText={val => {
            setDob(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="City"
          value={city}
          mode={'outlined'}
          onChangeText={val => {
            setcity(val);
          }}
          style={styles.input}
        />
        <TextInput
          label="Email"
          value={email}
          mode={'outlined'}
          onChangeText={val => {
            setEmail(val);
          }}
          style={styles.input}
        />

        <Text style={styles.text}> Choose your Gender</Text>
        <RadioButton.Group
          value={gender}
          onValueChange={value => setGender(value)}>
          <RadioButton.Item uncheckedColor="red" label="Male" value="male" />
          <RadioButton.Item
            uncheckedColor="red"
            label="Female"
            value="female"
          />
        </RadioButton.Group>
      </View>
      <View>
        <Text style={styles.title}>Educational Infromation </Text>
        <View Style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            label="Education"
            value={education}
            mode={'outlined'}
            onChangeText={val => {
              setEducation(val);
            }}
            style={styles.input}
          />
          <Button mode="contained" style={styles.btn} onPress={handleAdd}>
            Add
          </Button>
        </View>
        <FlatList data={data} renderItem={renderItem} />
        <View>
          <Text style={styles.title}>Experience </Text>
          <View>
            <TextInput
              label="Title of job"
              value={title}
              mode={'outlined'}
              onChangeText={val => {
                setTitle(val);
              }}
              style={styles.input}
            />
            <TextInput
              label="Company"
              value={company}
              mode={'outlined'}
              onChangeText={val => {
                setCompany(val);
              }}
              style={styles.input}
            />
            <TextInput
              label="Duration"
              value={duration}
              mode={'outlined'}
              onChangeText={val => {
                setDuration(val);
              }}
              style={styles.input}
            />
            <Button mode="contained" style={styles.btn} onPress={handleAddExp}>
              Add
            </Button>
          </View>
          <FlatList data={expdata} renderItem={renderExp} />
        </View>

        <View style={styles.imageContainer}>
          <Text style={styles.title}>Attach Your Image</Text>
          <ImagePicker imageData={imageData} setImageData={setImageData} />
          <Button mode="contained" style={styles.btn} onPress={saveHandler}>
            Save
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary,
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: '700',
    color: colors.dark,
    alignSelf: 'flex-start',
  },
  input: {
    marginLeft: 20,
    marginTop: 10,
    height: 50,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
    borderColor: colors.dark,
  },
  text: {
    color: colors.dark,
  },
  btn: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: colors.dark,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.dark,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    marginVertical: 20,
  },
  imageStyle: {
    width: '60%',
    height: 200,
    margin: 5,
    borderColor: '#472183',
    borderRadius: 10,
    borderWidth: 2,
  },
});
