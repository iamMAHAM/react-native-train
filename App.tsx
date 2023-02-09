// ** React native import

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// ** Components import
import HomeScreen from './src/screens/HomeScreen';
import Signup from './src/screens/Signup';
import { RootNavigator } from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { UserConsummer, UserProvider } from './src/context/User';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <UserConsummer>
          {({ user }) => (user ? <RootNavigator /> : <Signup />)}
        </UserConsummer>

        <StatusBar style="auto" />
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
