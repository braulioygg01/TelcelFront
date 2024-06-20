import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ViewSparePartsScreen = () => {
  const [spareParts, setSpareParts] = useState([]);

  useEffect(() => {
    const fetchSpareParts = async () => {
      try {
        const response = await fetch('backend-proyecto-kxviycaj7.vercel.app/api/spareparts');
        if (!response.ok) {
          throw new Error('Error al obtener repuestos');
        }
        const data = await response.json();
        setSpareParts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSpareParts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={spareParts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nombre: {item.nombreRefaccion}</Text>
            <Text>Precio: {item.precio}</Text>
            <Text>Cantidad: {item.cantidad}</Text>
            <Text>Descripción: {item.descripcion}</Text>
            <Text>Estatus: {item.estatus}</Text>
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

export default ViewSparePartsScreen;
