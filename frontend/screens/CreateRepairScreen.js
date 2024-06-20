import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

const CreateRepairScreen = () => {
  const [tipoReparacion, setTipoReparacion] = useState('');
  const [detalles, setDetalles] = useState('');
  const [costoServicio, setCostoServicio] = useState('');
  const [total, setTotal] = useState('');
  const [nombreCliente, setNombreCliente] = useState('');
  const [nombreTecnico, setNombreTecnico] = useState('');

  const handleCreateRepair = async () => {
    try {
      const res = await api.post('/repairs', { tipoReparacion, detalles, costoServicio, total, nombreCliente, nombreTecnico });
      if (res.status === 201) {
        // La reparación se creó exitosamente
        console.log('Reparación creada exitosamente:', res.data);
  
        // Ejemplo de acción posterior, como redirigir a otra página o mostrar un mensaje de éxito
        // Redirigir a la página de reparaciones existentes
        history.push('/repairs');
        
        // O mostrar un mensaje al usuario
        alert('¡La reparación se ha creado exitosamente!');
      }
    } catch (err) {
      console.error(err);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
      alert('Error al crear la reparación. Por favor, inténtalo de nuevo más tarde.');
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Tipo de Reparación" 
        onChangeText={setTipoReparacion} 
        value={tipoReparacion} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Detalles" 
        onChangeText={setDetalles} 
        value={detalles} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Costo del Servicio" 
        onChangeText={setCostoServicio} 
        value={costoServicio} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Total" 
        onChangeText={setTotal} 
        value={total} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Nombre del Cliente" 
        onChangeText={setNombreCliente} 
        value={nombreCliente} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Nombre del Técnico" 
        onChangeText={setNombreTecnico} 
        value={nombreTecnico} 
      />
      <Button title="Crear Reparación" onPress={handleCreateRepair} />
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

export default CreateRepairScreen;