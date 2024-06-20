import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';

const ViewAppointmentsScreen = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await api.get('/appointments');
        setAppointments(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={appointments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Fecha de Registro: {item.fechaRegistro}</Text>
            <Text>Fecha de Entrega: {item.fechaEntrega}</Text>
            <Text>Motivo de la Cita: {item.motivoCita}</Text>
            <Text>Hora de la Cita: {item.horaCita}</Text>
            <Text>Estatus de la Cita: {item.estatusCita}</Text>
            <Text>Dispositivos: {item.devices.map(device => device.name).join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default ViewAppointmentsScreen;