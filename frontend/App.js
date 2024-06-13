import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importa las pantallas
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CreateAppointmentScreen from './screens/CreateAppointmentScreen';
import ViewAppointmentsScreen from './screens/ViewAppointmentsScreen';
import CreateSparePartScreen from './screens/CreateSparePartScreen';
import ViewSparePartsScreen from './screens/ViewSparePartsScreen';
import CreateRepairScreen from './screens/CreateRepairScreen';
import ViewRepairsScreen from './screens/ViewRepairsScreen';

// Crea navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator para autenticación
const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

// Tab Navigator para la aplicación principal
const AppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'ios-home';
        } else if (route.name === 'Create Appointment') {
          iconName = 'ios-add';
        } else if (route.name === 'View Appointments') {
          iconName = 'ios-list';
        } else if (route.name === 'Spare Parts') {
          iconName = 'ios-cog';
        } else if (route.name === 'Repairs') {
          iconName = 'ios-hammer';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Create Appointment" component={CreateAppointmentScreen} />
    <Tab.Screen name="View Appointments" component={ViewAppointmentsScreen} />
    <Tab.Screen name="Spare Parts" component={SparePartsStack} />
    <Tab.Screen name="Repairs" component={RepairsStack} />
  </Tab.Navigator>
);

// Stack Navigator para Spare Parts
const SparePartsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="View Spare Parts" component={ViewSparePartsScreen} />
    <Stack.Screen name="Create Spare Part" component={CreateSparePartScreen} />
  </Stack.Navigator>
);

// Stack Navigator para Repairs
const RepairsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="View Repairs" component={ViewRepairsScreen} />
    <Stack.Screen name="Create Repair" component={CreateRepairScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="App" component={AppTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
