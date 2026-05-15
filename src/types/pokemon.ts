export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  results: PokemonListItem[];
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonDetail {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  weight: number;    // hectogramos -> dividir / 10 pa los kg
  height: number;   //decimetros -> dividir / 10 pa los metros
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}