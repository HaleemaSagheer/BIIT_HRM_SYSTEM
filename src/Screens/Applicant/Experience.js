import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../color/Theme';

export default function Experience() {
  return (
    <View>
      <Text>Experience</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,
    alignSelf: 'center',
  },
});
