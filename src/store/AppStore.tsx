import Api, { type ApiAnswer } from '@/utils/Api';
import AppLocalStorage from './AppLocalStorage';

class AppStore {
  private static instance: undefined | AppStore;

  constructor() {
    if (AppStore.instance) {
      return AppStore.instance;
    }

    AppStore.instance = this;

    return this;
  }

  getData = async (query: string): Promise<ApiAnswer> => {
    const processedQuery = query.trim();
    const result = processedQuery
      ? await Api.getData(processedQuery)
      : await Api.getAllData();

    if (result.data) {
      AppLocalStorage.saveQuery(processedQuery);
    }

    return result;
  };

  getInitData = async (): Promise<ApiAnswer> => {
    const processedQuery = AppLocalStorage.getQuery();
    const result = processedQuery
      ? await Api.getData(processedQuery)
      : await Api.getAllData();

    return result;
  };
}

export default new AppStore();
