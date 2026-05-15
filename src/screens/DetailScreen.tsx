import React from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import { COLORES_TIPO } from '../utils/constants';

type DetailRoute = RouteProp<RootStackParamList, 'Detail'>;

export function DetailScreen() {
  const route = useRoute<DetailRoute>();
  const { pokemonId } = route.params;
  const { pokemon, cargando, error } = usePokemonDetail(pokemonId);

  if (cargando) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#EF5350" />
      </View>
    );
  }

  if (error || !pokemon) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#c62828' }}>{error ?? 'No se encontró el Pokémon.'}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {/* Imagen */}
      <Image source={{ uri: pokemon.sprites.front_default }} style={{ width: 150, height: 150 }} />

      {/* Nombre y número */}
      <Text>#{String(pokemon.id).padStart(3, '0')} {pokemon.name}</Text>

      {/* Tipos (reusar COLORES_TIPO) */}

      {/* Peso y altura */}
      <Text>Peso: {(pokemon.weight / 10).toFixed(1)} kg</Text>
      <Text>Altura: {(pokemon.height / 10).toFixed(1)} m</Text>

      {/* Habilidades */}
      {pokemon.abilities.map((a) => (
        <Text key={a.slot}>{a.ability.name}{a.is_hidden ? ' (oculta)' : ''}</Text>
      ))}

      {/* Estadísticas base con barra de progreso */}
      {pokemon.stats.map((s) => (
        <View key={s.stat.name}>
          <Text>{s.stat.name}: {s.base_stat}</Text>
          {/* Barra exterior (fondo) */}
          <View style={{ width: '100%', height: 8, backgroundColor: '#eee', borderRadius: 4 }}>
            {/* Barra interior (valor) */}
            <View style={{
              width: `${(s.base_stat / 255) * 100}%`,
              height: 8,
              backgroundColor: '#EF5350',
              borderRadius: 4
            }} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}