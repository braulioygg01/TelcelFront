import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const CreateSparePartScreen = ({ navigation }) => {
  const [nombreRefaccion, setNombreRefaccion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleCreateSparePart = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const res = await api.post('/spareparts', 
        { nombreRefaccion, precio, cantidad, descripcion },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 201) {
        Alert.alert('Éxito', 'Refacción creada con éxito');
        // Navegar a la pantalla de repuestos o cualquier otra pantalla
        navigation.goBack();
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        console.log('Error data:', err.response.data);
        console.log('Error status:', err.response.status);
        console.log('Error headers:', err.response.headers);
        Alert.alert('Error', `Error al crear la refacción: ${err.response.data.message || 'Por favor, intenta de nuevo.'}`);
      } else {
        Alert.alert('Error', 'Error de red. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre de la Refacción</Text>
      <TextInput
        style={styles.input}
        value={nombreRefaccion}
        onChangeText={setNombreRefaccion}
      />

      <Text style={styles.label}>Precio</Text>
      <TextInput
        style={styles.input}
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Cantidad</Text>
      <TextInput
        style={styles.input}
        value={cantidad}
        onChangeText={setCantidad}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <Button title="Crear Refacción" onPress={handleCreateSparePart} />
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

export default CreateSparePartScreen;