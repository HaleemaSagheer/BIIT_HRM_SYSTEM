import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {colors} from '../../color/Theme';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');
  const sendCodeHandler = () => {
    navigation.navigate('ResetPassword');
  };
  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={require('../../Images/resetpassword.png')}
        />
      </View>
      <Text style={styles.title}>ForgotPassword</Text>
      <TextInput
        label="Email"
        value={email}
        mode={'outlined'}
        onChangeText={val => {
          setEmail(val);
        }}
        left={<TextInput.Icon icon={'email-outline'} iconColor="#22C55E" />}
        style={styles.input}
      />
      <Button mode="contained" style={styles.btn} onPress={sendCodeHandler}>
        Send Code
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  ImageView: {
    marginLeft: 110,
    paddingTop: 20,
    paddingBottom: 30,
  },
  Image: {
    height: 200,
    width: 200,
    borderRadius: 90,
    borderWidth: 10,
    borderColor: colors.dark,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.dark,

    alignSelf: 'center',
  },
  input: {
    marginLeft: 20,
    marginTop: 30,
    height: 60,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 60,
  },
  btn: {
    backgroundColor: colors.dark,
    marginTop: 30,
    height: 50,
    width: '50%',
    alignSelf: 'center',
    fontWeight: '800',
  },
});
