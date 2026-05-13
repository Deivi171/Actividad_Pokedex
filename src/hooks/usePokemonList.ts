import { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetail } from '../services/pokemonService';
import { PokemonDetail } from '../types/pokemon';


 //Hook personalizado que obtiene y devuelve la lista de los primeros 20 Pokémon
export function usePokemonList() {
  
  const [pokemon, setPokemon] = useState<PokemonDetail[]>([]);

  const [cargando, setCargando] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function cargarPokemon() {
      try {
        setCargando(true);
        setError(null);

        const listaBasica = await getPokemonList(20, 0);

        const detalles = await Promise.all(
          listaBasica.results.map((item) => getPokemonDetail(item.name))
        );

        setPokemon(detalles);
      } catch (err) {
        setError('No se pudo cargar la lista de Pokémon. Verifica tu conexión.');
      } finally {
        setCargando(false);
      }
    }

    cargarPokemon();
  }, []);

  return { pokemon, cargando, error };
}
