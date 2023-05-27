import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, FAB, Card} from 'react-native-paper';
import {colors} from '../../color/Theme';

export default function Committees({navigation, route}) {
  const {committeeName, head} = route.params;
  const handleFAB = () => {
    navigation.navigate('NewCommittee');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Committees</Text>
      <Card style={styles.card}>
        <Card.Title title={committeeName} />
        <Card.Content>
          <Text>Head: {head}</Text>
          {/* Add more committee details here */}
        </Card.Content>
      </Card>
      {/* Floating  Button */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => handleFAB()}
        position
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    borderColor: colors.dark,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,
    alignSelf: 'center',
  },
  card: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  fab: {
    marginTop: 10,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
