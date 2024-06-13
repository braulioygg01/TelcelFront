import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const CreateAppointmentScreen = ({ navigation }) => {
  const [motivoCita, setMotivoCita] = useState('');
  const [horaCita, setHoraCita] = useState('');
  //const [estatusCita, setEstatusCita] = useState('');
  //const [devices, setDevices] = useState([]);

  const handleCreateAppointment = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'No se encontró el token de autenticación.');
        return;
      }

      const res = await api.post('/appointments', 
        { motivoCita, horaCita},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 201) {
        Alert.alert('Éxito', 'Cita creada con éxito');
        navigation.goBack();
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        console.log('Error data:', err.response.data);
        console.log('Error status:', err.response.status);
        console.log('Error headers:', err.response.headers);
        Alert.alert('Error', `Error al crear la cita: ${err.response.data.message || 'Por favor, intenta de nuevo.'}`);
      } else {
        Alert.alert('Error', 'Error de red. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Motivo de la Cita</Text>
      <TextInput
        style={styles.input}
        value={motivoCita}
        onChangeText={setMotivoCita}
      />

      <Text style={styles.label}>Hora de la Cita</Text>
      <TextInput
        style={styles.input}
        value={horaCita}
        onChangeText={setHoraCita}
      />
      
      <Button title="Crear Cita" onPress={handleCreateAppointment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default CreateAppointmentScreen;