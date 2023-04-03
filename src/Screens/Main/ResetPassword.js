import {StyleSheet, Text, View, Image} from 'react-native';
import {React, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';

export default function ResetPassword({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleDone = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={require('../Images/resetpassword.png')}
        />
      </View>
      <Text style={styles.title}>set new password</Text>
      <TextInput
        label="Password"
        value={password}
        mode={'outlined'}
        secureTextEntry={true}
        onChangeText={val => {
          setPassword(val);
        }}
        left={<TextInput.Icon icon={'key'} iconColor="#22C55E" />}
        right={<TextInput.Icon icon="eye" />}
        style={styles.input}
      />
      <TextInput
        label="confirm Password"
        value={confirmPassword}
        mode={'outlined'}
        secureTextEntry={true}
        onChangeText={val => {
          setPassword(val);
        }}
        left={<TextInput.Icon icon={'key'} iconColor="#22C55E" />}
        right={<TextInput.Icon icon="eye" />}
        style={styles.input}
      />
      <Button mode="contained" style={styles.btn} onPress={handleDone}>
        Done
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
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
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#000',

    alignSelf: 'center',
  },
  input: {
    marginLeft: 20,
    marginTop: 30,
    height: 50,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: 'orange',
    marginTop: 30,
    height: 50,
    width: '50%',
    alignSelf: 'center',
    fontWeight: '800',
  },
});
