import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    try {
      const res = await api.post('/auth/register', { firstName, lastName, phone, email, password, role });
      if (res.data.token) {
        // Guardar el token en AsyncStorage
        await AsyncStorage.setItem('token', res.data.token);
  
        // Navegar a la pantalla principal (App)
        navigation.replace('App');
      }
    } catch (err) {
      console.error(err);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
      alert('Error al registrarse. Por favor, verifica tus datos e inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="First Name" 
        onChangeText={setFirstName} 
        value={firstName} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Last Name" 
        onChangeText={setLastName} 
        value={lastName} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Phone" 
        onChangeText={setPhone} 
        value={phone} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Email" 
        onChangeText={setEmail} 
        value={email} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Password" 
        onChangeText={setPassword} 
        value={password} 
        secureTextEntry 
      />
      <TextInput 
        style={styles.input}
        placeholder="Role" 
        onChangeText={setRole} 
        value={role} 
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default RegisterScreen;