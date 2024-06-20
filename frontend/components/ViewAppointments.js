import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../services/api';

const ViewAppointments = () => {
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
    <View>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.motivoCita}</Text>
            <Text>{item.horaCita}</Text>
            {/* <Text>{item.estatusCita}</Text> */}
            {/* Aquí puedes renderizar más detalles de la cita */}
          </View>
        )}
      />
    </View>
  );
};

export default ViewAppointments;