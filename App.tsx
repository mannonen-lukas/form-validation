import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Inscription from './components/Inscription';
import HomeScreen from './components/HomeScreen';
import Inscription2 from './components/Inscription2';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="inscription" component={Inscription} />
        <Stack.Screen name="inscription2" component={Inscription2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

