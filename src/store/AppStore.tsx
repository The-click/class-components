import { processPokemon, processPokemonList } from '@/utils/ParseData';

export class AppStore {
  URL_PATH = 'https://pokeapi.co/api/v2/pokemon';

  getData = async (query: string) => {
    const url = new URL(`${this.URL_PATH}${query ? '/' + query : ''}`);
    url.searchParams.append('limit', '10');
    url.searchParams.append('offset', '0');

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

      if (query) {
        return processPokemon(json);
      } else {
        return processPokemonList(json);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
}
