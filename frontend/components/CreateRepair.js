import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateRepair = ({ navigation }) => {
  const [tipoReparacion, setTipoReparacion] = useState('');
  const [detalles, setDetalles] = useState('');
  const [costoServicio, setCostoServicio] = useState('');
  const [total, setTotal] = useState('');
  const [nombreCliente, setNombreCliente] = useState('');
  const [nombreTecnico, setNombreTecnico] = useState('');

  const handleCreateRepair = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const res = await axios.post(
        'http://yourbackendurl.com/api/repairs',
        { tipoReparacion, detalles, costoServicio, total, nombreCliente, nombreTecnico },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 201) {
        Alert.alert('Éxito', 'La reparación se ha creado exitosamente');
        navigation.replace('RepairsList'); // Navegar a la pantalla de la lista de reparaciones
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Error al crear la reparación. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de Reparación</Text>
      <TextInput
        style={styles.input}
        value={tipoReparacion}
        onChangeText={setTipoReparacion}
      />

      <Text style={styles.label}>Detalles</Text>
      <TextInput
        style={styles.input}
        value={detalles}
        onChangeText={setDetalles}
      />

      <Text style={styles.label}>Costo del Servicio</Text>
      <TextInput
        style={styles.input}
        value={costoServicio}
        onChangeText={setCostoServicio}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Total</Text>
      <TextInput
        style={styles.input}
        value={total}
        onChangeText={setTotal}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Nombre del Cliente</Text>
      <TextInput
        style={styles.input}
        value={nombreCliente}
        onChangeText={setNombreCliente}
      />

      <Text style={styles.label}>Nombre del Técnico</Text>
      <TextInput
        style={styles.input}
        value={nombreTecnico}
        onChangeText={setNombreTecnico}
      />

      <Button title="Crear Reparación" onPress={handleCreateRepair} />
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

export default CreateRepair;
