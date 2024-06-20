import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

const CreateSparePartScreen = () => {
  const [nombreRefaccion, setNombreRefaccion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleCreateSparePart = async () => {
    try {
      const res = await api.post('/spareparts', { nombreRefaccion, precio, cantidad, descripcion });
      if (res.status === 201) {
        // La refacción se creó exitosamente
        console.log('Refacción creada exitosamente:', res.data);
  
        // Ejemplo de acción posterior, como redirigir a otra página o mostrar un mensaje de éxito
        // Redirigir a la página de refacciones agregadas
        history.push('/spareparts');
        
        // O mostrar un mensaje al usuario
        alert('¡La refacción se ha creado exitosamente!');
      }
    } catch (err) {
      console.error(err);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
      alert('Error al crear la refacción. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Nombre de la Refacción" 
        onChangeText={setNombreRefaccion} 
        value={nombreRefaccion} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Precio" 
        onChangeText={setPrecio} 
        value={precio} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Cantidad" 
        onChangeText={setCantidad} 
        value={cantidad} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Descripción" 
        onChangeText={setDescripcion} 
        value={descripcion} 
      />
      <Button title="Crear Refacción" onPress={handleCreateSparePart} />
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

export default CreateSparePartScreen;