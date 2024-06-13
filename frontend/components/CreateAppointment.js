import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import api from '../services/api';

const CreateAppointment = ({ navigation }) => {
  const [motivoCita, setMotivoCita] = useState('');
  const [horaCita, setHoraCita] = useState('');
  const [estatusCita, setEstatusCita] = useState('');
  const [dispositivos, setDispositivos] = useState([{ marca: '', modelo: '', problema: '' }]);

  const handleCreateAppointment = async () => {
    try {
      await api.post('/appointments', { motivoCita, horaCita});
      navigation.navigate('ViewAppointments');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <TextInput placeholder="Motivo de la Cita" onChangeText={setMotivoCita} value={motivoCita} />
      <TextInput placeholder="Hora de la Cita" onChangeText={setHoraCita} value={horaCita} />
      {/* <TextInput placeholder="Estatus de la Cita" onChangeText={setEstatusCita} value={estatusCita} />
      {/* Aquí puedes agregar más inputs para los dispositivos*/}
      <Button title="Crear Cita" onPress={handleCreateAppointment} />
    </View>
  );
};

export default CreateAppointment;
