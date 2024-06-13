import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/Login';
import Register from '../components/Register';
import CreateAppointment from '../components/CreateAppointment';
import ViewAppointments from '../components/ViewAppointments';
import CreateSparePart from '../components/CreateSparePart';
import ViewSpareParts from '../components/ViewSpareParts';
import CreateRepair from '../components/CreateRepair';
import ViewRepairs from '../components/ViewRepairs';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    CreateAppointment: { screen: CreateAppointment },
    ViewAppointments: { screen: ViewAppointments },
    CreateSparePart: { screen: CreateSparePart },
    ViewSpareParts: { screen: ViewSpareParts },
    CreateRepair: { screen: CreateRepair },
    ViewRepairs: { screen: ViewRepairs },
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
