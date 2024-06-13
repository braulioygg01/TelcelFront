import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';

const ViewRepairsScreen = () => {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    const fetchRepairs = async () => {
      try {
        const res = await api.get('/repairs');
        setRepairs(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepairs();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={repairs}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Tipo de Reparación: {item.tipoReparacion}</Text>
            <Text>Detalles: {item.detalles}</Text>
            <Text>Costo del Servicio: {item.costoServicio}</Text>
            <Text>Total: {item.total}</Text>
            <Text>ID de la Cita: {item.idCita}</Text>
            <Text>Nombre del Cliente: {item.nombreCliente}</Text>
            <Text>Nombre del Técnico: {item.nombreTecnico}</Text>
            <Text>Dispositivos: {item.devices.map(device => device.name).join(', ')}</Text>
            <Text>Refacciones Utilizadas: {item.refacciones.map(refaccion => refaccion.nombreRefaccion).join(', ')}</Text>
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

export default ViewRepairsScreen;
