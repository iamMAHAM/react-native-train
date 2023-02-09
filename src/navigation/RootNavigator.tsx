import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Signup from '../screens/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserConsummer } from '../context/User';

export type RouteParams = {
  Home: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();
const Tab = createBottomTabNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Accueil',
            tabBarAccessibilityLabel: 'Accueil',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" style={{ fontSize: 24 }} />
            ),
          }}
        />
        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{
            tabBarLabel: 'Connexion',
            tabBarAccessibilityLabel: 'Connexion',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="login" style={{ fontSize: 24 }} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
