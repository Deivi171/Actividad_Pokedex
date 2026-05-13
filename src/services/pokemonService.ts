import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { PokemonListResponse, PokemonDetail } from '../types/pokemon';

export async function getPokemonList(
  limit: number, // Cuántos Pokémon obtener por página
  offset: number // Cuántos Pokémon omitir desde el inicio para la paginación
): Promise<PokemonListResponse> {
  const respuesta = await axios.get<PokemonListResponse>(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  return respuesta.data;
}

export async function getPokemonDetail(
  nombreOId: string | number
): Promise<PokemonDetail> {
  const respuesta = await axios.get<PokemonDetail>(
    `${BASE_URL}/pokemon/${nombreOId}` // La API acepta tanto el nombre como el ID del Pokémon para obtener su detalle
  );
  return respuesta.data;
}
