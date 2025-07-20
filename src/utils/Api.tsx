import { processPokemon, processPokemonList } from '@/utils/ParseData';

export interface ApiAnswer {
  data: string | object | [];
  error?: string;
}

class ApiError extends Error {
  status?: number;
  url?: string;
}

class Api {
  private static instance: undefined | Api;
  private URL_PATH = 'https://pokeapi.co/api/v2/pokemon';

  constructor() {
    if (Api.instance) {
      return Api.instance;
    }

    Api.instance = this;

    return this;
  }

  parseError = (error: ApiError): string => {
    if (!error.status) {
      return `Не известная ошибка при запросе на ${this.URL_PATH}`;
    }

    if (error.status === 400) {
      return `По запросу ${JSON.stringify(error.url)} не найдено ничего`;
    }

    if (error.status === 500) {
      return `Ошибка на стороне сервера при запросе на ${JSON.stringify(error.url)}`;
    }

    return error.message;
  };

  getAllData = async (): Promise<ApiAnswer> => {
    const url = new URL(this.URL_PATH);
    url.searchParams.append('limit', '10');
    url.searchParams.append('offset', '0');

    try {
      const response = await fetch(url);

      if (!response.ok) {
        const error: ApiError = new ApiError(`Ошибка при запросе на ${url}`);
        error.status = response.status;
        error.url = url.toJSON();

        throw error;
      }

      const json = await response.json();

      return { data: processPokemonList(json), error: '' };
    } catch (error) {
      if (!(error instanceof Error)) {
        return { data: '', error: 'Не известная ошибка' };
      }

      if (error instanceof ApiError) {
        const errorMsg = this.parseError(error);

        return { data: '', error: errorMsg };
      }

      return { data: '', error: error.message };
    }
  };

  getData = async (query: string): Promise<ApiAnswer> => {
    const url = new URL(`${this.URL_PATH}/${query}`);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        const error: ApiError = new ApiError(`Ошибка при запросе на ${url}`);
        error.status = response.status;
        error.url = url.toJSON();

        throw error;
      }

      const json = await response.json();

      return { data: processPokemon(json), error: '' };
    } catch (error) {
      if (!(error instanceof Error)) {
        return { data: '', error: 'Не известная ошибка' };
      }

      if (error instanceof ApiError) {
        const errorMsg = this.parseError(error);

        return { data: '', error: errorMsg };
      }

      return { data: '', error: error.message };
    }
  };
}

export default new Api();
