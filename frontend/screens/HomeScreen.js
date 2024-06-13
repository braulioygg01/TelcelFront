import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Create Appointment" onPress={() => navigation.navigate('Create Appointment')} />
      <Button title="View Appointments" onPress={() => navigation.navigate('View Appointments')} />
      <Button title="Spare Parts" onPress={() => navigation.navigate('Spare Parts')} />
      <Button title="Repairs" onPress={() => navigation.navigate('Repairs')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
