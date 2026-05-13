import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PokemonDetail } from '../types/pokemon';
import { COLORES_TIPO } from '../utils/constants';

interface Props {
  pokemon: PokemonDetail;
}

export function PokemonCard({ pokemon }: Props) {
  const numeroFormateado = `#${String(pokemon.id).padStart(3, '0')}`;

  const nombreCapitalizado =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <View style={estilos.tarjeta}>
      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={estilos.imagen}
        resizeMode="contain"
      />

      <Text style={estilos.numero}>{numeroFormateado}</Text>

      <Text style={estilos.nombre}>{nombreCapitalizado}</Text>

      <View style={estilos.contenedorTipos}>
        {pokemon.types.map((tipoPokemon) => {
          const colorTipo = COLORES_TIPO[tipoPokemon.type.name] ?? '#aaa';
          return (
            <View
              key={tipoPokemon.slot}
              style={[estilos.insignia, { backgroundColor: colorTipo }]}
            >
              <Text style={estilos.textoInsignia}>
                {tipoPokemon.type.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    margin: 8,
    alignItems: 'center',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  imagen: {
    width: 96,
    height: 96,
  },
  numero: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 2,
    marginBottom: 6,
  },
  contenedorTipos: {
    flexDirection: 'row',
    gap: 4,
  },
  insignia: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  textoInsignia: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
