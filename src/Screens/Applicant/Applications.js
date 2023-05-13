import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { colors } from '../../color/Theme';

export default function Applications() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Applications</Text>

      <ScrollView style={styles}>
        <View style={{ height: "100%", width: "100%", backgroundColor: colors.white,padding:20, borderRadius:15,  }}>
          <View style={{ flexDirection: "row", alignItems: "center",marginBottom:10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: colors.black, width:"30%" }}> Job Title:</Text>
            <Text style={{ fontSize: 16, fontWeight: "800", color: colors.black, width:"70%", textAlign:"left" }}>Network Administrator</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom:10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: colors.black, width:"30%" }}> Date:</Text>
            <Text style={{ fontSize: 16, fontWeight: "800", color: colors.black, width:"70%", textAlign:"left" }}>05-Feb-2023</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: colors.black, width:"30%" }}> Status:</Text>
            <Text style={{ fontSize: 16, fontWeight: "800", color: colors.black, width:"70%", textAlign:"left" }}>Rejected</Text>
          </View>

        </View>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
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
