import { useEffect, useState } from 'react';
import { getPokemonDetail } from '../services/pokemonService';
import { PokemonDetail } from '../types/pokemon';


export function usePokemonDetail(id: number) {
    const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    setCargando(true);
    setError(null);
    getPokemonDetail(id)
      .then(setPokemon)
      .catch(() => setError('No se pudo cargar el detalle.'))
      .finally(() => setCargando(false));
  }, [id]);  // se re-ejecuta si cambia el id

  return { pokemon, cargando, error };
}