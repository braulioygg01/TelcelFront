import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      if (res.data.token) {
        // Guardar el token en AsyncStorage
        await AsyncStorage.setItem('token', res.data.token);
  
        // Navegar a la pantalla principal (App)
        navigation.replace('App');
      }
    } catch (err) {
      console.error(err);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales e inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
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

export default LoginScreen;
