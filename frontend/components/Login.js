import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import api from '../services/api';
import { setToken } from '../utils/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      await setToken(res.data.token);
      navigation.navigate('Appointments');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Register')}>Register</Text>
    </View>
  );
};

export default Login;
