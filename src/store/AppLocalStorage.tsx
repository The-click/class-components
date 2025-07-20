class AppLocalStorage {
  private static instance: undefined | AppLocalStorage;
  private QUERY_KEY = 'query';

  constructor() {
    if (AppLocalStorage.instance) {
      return AppLocalStorage.instance;
    }

    AppLocalStorage.instance = this;

    return this;
  }

  saveQuery = (query: string) => {
    localStorage.setItem(this.QUERY_KEY, query);
  };

  getQuery = () => {
    return localStorage.getItem(this.QUERY_KEY);
  };
}

export default new AppLocalStorage();
