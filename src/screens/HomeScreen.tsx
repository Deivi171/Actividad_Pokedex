import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonCard } from '../components/PokemonCard';
import { PokemonDetail } from '../types/pokemon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type NavProp = StackNavigationProp<RootStackParamList, 'Home'>;

 // Pantalla principal que muestra los primeros 20
export function HomeScreen() {
  const { pokemon, cargando, error } = usePokemonList();
  const navigation = useNavigation<NavProp>();

  if (cargando) {
    return (
      <View style={estilos.centrado}>
        <ActivityIndicator size="large" color="#EF5350" />
        <Text style={estilos.textoCargando}>Cargando Pokémon...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={estilos.centrado}>
        <Text style={estilos.textoError}>{error}</Text>
      </View>
    );
  }

  if (pokemon.length === 0) {
    return (
      <View style={estilos.centrado}>
        <Text style={estilos.textoVacio}>No se encontraron Pokémon.</Text>
      </View>
    );
  }

  return (
    <View style={estilos.contenedor}>
      <FlatList<PokemonDetail>
        data={pokemon}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => 
        <PokemonCard
        pokemon={item}
        onPress={() => navigation.navigate('Detail', { pokemonId: item.id })}
  />}
        contentContainerStyle={estilos.lista}

      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  lista: {
    padding: 8,
  },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 24,
  },
  textoCargando: {
    marginTop: 12,
    fontSize: 16,
    color: '#555',
  },
  textoError: {
    fontSize: 16,
    color: '#c62828',
    textAlign: 'center',
  },
  textoVacio: {
    fontSize: 16,
    color: '#777',
  },
});
