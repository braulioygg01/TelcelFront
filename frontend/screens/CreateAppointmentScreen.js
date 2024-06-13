import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

const CreateAppointmentScreen = () => {
  const [motivoCita, setMotivoCita] = useState('');
  const [horaCita, setHoraCita] = useState('');
  const [devices, setDevices] = useState([]);

  const handleCreateAppointment = async () => {
    try {
      const res = await api.post('/appointments', { motivoCita, horaCita });
      if (res.status === 201) {
        console.log('Cita creada exitosamente:', res.data);
        history.push('/appointments');
        alert('¡La cita se ha creado exitosamente!');
      }
    } catch (err) {
      console.error(err);
      alert('Error al crear la cita. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Motivo de la Cita" 
        onChangeText={setMotivoCita} 
        value={motivoCita} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Hora de la Cita" 
        onChangeText={setHoraCita} 
        value={horaCita} 
      />
      {/* Implementar la lógica para agregar dispositivos*/}
      <Button title="Crear Cita" onPress={handleCreateAppointment}/>
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

export default CreateAppointmentScreen;
