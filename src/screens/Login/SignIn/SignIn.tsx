import {View, Text, Image, TextInput, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {users} from '../../../assets/users';
import {useAuthContext} from '../../../contexts/AuthContext';
const LOGO = require('../../../assets/logo.png');

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {authUser, setAuthUser} = useAuthContext();

  const onSignIn = () => {
    try {
      if (username !== users[0].username) {
        Alert.alert('Incorrect username');
        return;
      }
      if (username === users[0].username && password !== users[0].password) {
        Alert.alert('Wrong password');
        return;
      }

      setAuthUser(username);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={LOGO} />
      </View>
      {/* input section */}
      <View style={styles.inputContainer}>
        <Entypo name="user" size={25} />
        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Entypo name="key" size={25} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />
      </View>
      <Pressable style={styles.button} onPress={onSignIn}>
        <Text style={styles.textButton}>Sign In</Text>
      </Pressable>
      {/* Social provider section */}
      <View style={styles.divider} />
      <Text style={styles.textDiv}>Or Sign In With: </Text>
      <View style={styles.socialContainer}>
        <Pressable onPress={() => Alert.alert('Facebook')}>
          <Entypo name="facebook-with-circle" size={45} color="white" />
        </Pressable>
        <Pressable onPress={() => Alert.alert('Google')}>
          <Entypo name="google--with-circle" size={45} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
