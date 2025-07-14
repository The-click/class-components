import type { ICard } from '@/components/ui/types';

interface IPokemon {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  weight: number;
  order: number;
}

interface IPokemonList {
  results: { name: string; url: string }[];
}

export const processPokemon = (pokemon: IPokemon): ICard => {
  return {
    name: pokemon.name,
    description: `ID - ${pokemon.id} \nBase experience - ${pokemon.base_experience} \nHeight - ${pokemon.height} \nWeight - ${pokemon.weight}`,
  };
};

export const processPokemonList = (pokemonList: IPokemonList): ICard[] => {
  return pokemonList.results.map((pokemon) => ({
    name: pokemon.name,
    description: `URL - ${pokemon.url}`,
  }));
};
