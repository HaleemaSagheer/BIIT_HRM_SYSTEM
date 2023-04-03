import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../color/Theme';

export default function Applications() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Applications</Text>

      <ScrollView style={styles}>
        <View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Job Title:</Text>
            <Text style={styles.text}> Network Administrator</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> 05-Feb-2023</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Rejected</Text>
          </View>
        </View>
        <View style={{flex: 1, height: 2, backgroundColor: colors.dark}} />

        <View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Job Title:</Text>
            <Text style={styles.text}> Professor</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> 05-Feb-2023</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Pending</Text>
          </View>
        </View>
        <View style={{flex: 1, height: 2, backgroundColor: colors.dark}} />
        <View>
          <View style={styles.scroll}>
            <Text style={styles.text}> Job Title:</Text>
            <Text style={styles.text}> Assistant Professor</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}> 05-Feb-2023</Text>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.text}>Hired</Text>
          </View>
        </View>
        <View style={{flex: 1, height: 2, backgroundColor: colors.dark}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
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
