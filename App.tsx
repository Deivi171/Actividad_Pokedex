import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { DetailScreen } from './src/screens/DetailScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: { pokemonId: number }; //parametro que viaja entre pantallas
};

// Crear el navegador de tipo stack con los tipos definidos arriba
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // Estilo del encabezado: fondo rojo Pokédex y texto blanco
          headerStyle: {
            backgroundColor: '#EF5350',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Pokédex' }}
        />
        
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detalle' }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
