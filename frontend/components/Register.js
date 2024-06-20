import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import api from '../services/api';

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Client');

  const handleRegister = async () => {
    try {
      await api.post('/auth/register', { firstName, lastName, phone, email, password, role });
      navigation.navigate('Login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <TextInput placeholder="First Name" onChangeText={setFirstName} value={firstName} />
      <TextInput placeholder="Last Name" onChangeText={setLastName} value={lastName} />
      <TextInput placeholder="Phone" onChangeText={setPhone} value={phone} />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Register;