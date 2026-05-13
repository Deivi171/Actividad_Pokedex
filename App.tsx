import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
};

// Crear el navegador de tipo stack con los tipos definidos arriba
const Stack = createStackNavigator<RootStackParamList>();


 // Componente raíz de la app.  Configura el contenedor de navegación 
 // el stack con la pantalla principal.
 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
