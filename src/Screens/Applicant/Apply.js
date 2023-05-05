// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import {Button, TextInput, FAB} from 'react-native-paper';
// import {colors} from '../../color/Theme';

// export default function Apply({route}) {
//   const [fname, setFname] = useState('');
//   const [lname, setLname] = useState('');
//   const [cnic, setCnic] = useState();
//   const [dob, setDob] = useState();
//   const [mobileNo, setMobileNo] = useState();
//   const {item} = route.params;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{item.job_title}</Text>
//       <View>
//         <Text style={styles.subtitle}>Personal Infromation</Text>
//         <TextInput
//           label="FirstName"
//           value={fname}
//           mode={'outlined'}
//           onChangeText={val => {
//             setFname(val);
//           }}
//           style={styles.input}
//         />
//         <TextInput
//           label="LastName"
//           value={lname}
//           mode={'outlined'}
//           onChangeText={val => {
//             setLname(val);
//           }}
//           style={styles.input}
//         />
//         <TextInput
//           label="CNIC"
//           value={cnic}
//           mode={'outlined'}
//           onChangeText={val => {
//             setCnic(val);
//           }}
//           style={styles.input}
//         />
//         <TextInput
//           label="Mobile No"
//           value={mobileNo}
//           mode={'outlined'}
//           onChangeText={val => {
//             setMobileNo(val);
//           }}
//           style={styles.input}
//         />
//       </View>
//       //Floating  Button
//       {/* <FAB
//         icon="plus"
//         style={styles.fab}
//         onPress={() => console.log('Pressed')}
//         position
//       /> */}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.primary,
//     flex: 1,
//     borderColor: colors.dark,
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: '800',
//     color: colors.dark,
//     alignSelf: 'center',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: colors.dark,
//     alignSelf: 'flex-start',
//   },
//   input: {
//     marginLeft: 20,
//     marginTop: 10,
//     height: 50,
//     width: '90%',
//     borderRadius: 5,
//     alignSelf: 'center',
//     borderColor: colors.dark,
//   },
//   fab: {
//     marginTop: 10,
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
//   },
// });
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {colors} from '../../color/Theme';
import DocumentPicker from 'react-native-document-picker';

const ApplyScreen = ({navigation, route}) => {
  const {item} = route.params;
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle CV attachment
  const handleAttachCV = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images], // Specify the acceptable file types here
      });

      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('File picking cancelled');
      } else {
        console.log('Error:', err);
      }
    }
  };

  // Function to handle submit button
  const handleSubmit = () => {
    // Send the selectedFile to the server for saving in the database
    if (selectedFile) {
      // Perform an API request or any other method to send the file to the server
      console.log('Sending file to the server:', selectedFile);
    }
  };

  // Render file preview based on the selected file type
  // ...

  // Render file preview based on the selected file type
  const renderFilePreview = () => {
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        return <Text>{selectedFile.name}</Text>;
      } else if (selectedFile.type && selectedFile.type.includes('image')) {
        return (
          <Image source={{uri: selectedFile.uri}} style={styles.previewImage} />
        );
      }
    }
    return <Text>No file selected</Text>;
  };

  // ...

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.txt}>Attach Your CV Here</Text>
        {renderFilePreview()}
      </ScrollView>
      <Button
        mode="contained"
        onPress={handleAttachCV}
        style={{backgroundColor: colors.dark}}>
        Attach CV
      </Button>
      {selectedFile && (
        <Button
          mode="contained"
          onPress={handleSubmit}
          style={{marginTop: 10, backgroundColor: colors.dark}}>
          Submit
        </Button>
      )}
    </View>
  );
};

export default ApplyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
