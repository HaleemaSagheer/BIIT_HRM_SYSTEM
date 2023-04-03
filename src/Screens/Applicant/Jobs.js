import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {React, useState} from 'react';
import {Button, card, Searchbar} from 'react-native-paper';
import {colors} from '../../color/Theme';

export default function Jobs({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const ApplyHandler = () => {};
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.Image} source={require('../../Images/job.png')} />
      </View>

      <Text style={styles.title}>Jobs</Text>
      <View style={styles.searcbar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={styles}>
        <View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Job Title:</Text>
            <Text style={styles.text}> Network Administrator</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Vacancies:</Text>
            <Text style={styles.text}> 3</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Due Date:</Text>
            <Text style={styles.text}> 05-Feb-2023</Text>
          </View>
          <Button mode="contained" onPress={ApplyHandler} style={styles.btn}>
            Apply
          </Button>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
        </View>
        <View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Job Title:</Text>
            <Text style={styles.text}> Network Administrator</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Vacancies:</Text>
            <Text style={styles.text}> 3</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Due Date:</Text>
            <Text style={styles.text}> 05-Feb-2023</Text>
          </View>
          <Button mode="contained" onPress={ApplyHandler} style={styles.btn}>
            Apply
          </Button>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
        </View>
        <View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Job Title:</Text>
            <Text style={styles.text}> Network Administrator</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Vacancies:</Text>
            <Text style={styles.text}> 3</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Due Date:</Text>
            <Text style={styles.text}> 05-Feb-2023</Text>
          </View>
          <Button mode="contained" onPress={ApplyHandler} style={styles.btn}>
            Apply
          </Button>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
        </View>
        <View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Job Title:</Text>
            <Text style={styles.text}> Network Administrator</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Vacancies:</Text>
            <Text style={styles.text}> 3</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Due Date:</Text>
            <Text style={styles.text}> 05-Feb-2023</Text>
          </View>
          <Button mode="contained" onPress={ApplyHandler} style={styles.btn}>
            Apply
          </Button>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
        </View>
      </ScrollView>
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
    width: 420,
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
  searcbar: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
});
