import Header from '@/components/shared/header/Header';
import Main from '@/components/shared/main/Main';
import Button from '@/components/ui/Button/Button';
import ErrorBomb from '@/components/ui/ErrorBomb/ErrorBomb';
import AppStore from '@/store/AppStore';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    appError: false,
    isLoading: true,
    error: '',
    data: [
      {
        description:
          'Description description description description Description description description description Description description description description Description description description description Description description description description Description description description description Description description description description Description description description description',
        name: 'Name name Name nameName nameName nameName nameName nameName nameName name',
      },
      {
        description:
          'Description description description description Description description description description',
        name: 'Name name',
      },
    ],
  };

  componentDidMount(): void {
    this.initializeData();
  }

  initializeData = async () => {
    this.setState((prevValue) => ({ ...prevValue, isLoading: true }));

    const response = await AppStore.getInitData();

    this.setState((prevValue) => ({
      ...prevValue,
      data: response.data,
      error: response.error,
      isLoading: false,
    }));
  };

  search = async (query: string) => {
    this.setState((prevValue) => ({ ...prevValue, isLoading: true }));

    const response = await AppStore.getData(query);

    this.setState((prevValue) => ({
      ...prevValue,
      data: response.data,
      error: response.error,
      isLoading: false,
    }));
  };

  generateError = () => {
    this.setState({ appError: true });
  };

  render() {
    return (
      <div className="flex flex-col items-center gap-y-5 ">
        <Header searchElements={this.search.bind(this)} clasName="w-140" />

        <Main
          data={this.state.data}
          loading={this.state.isLoading}
          error={this.state.error}
          className="h-[50vh] overflow-y-auto"
        />
        <Button onClick={this.generateError.bind(this)}>Error Generate</Button>
        {this.state.appError && <ErrorBomb />}
      </div>
    );
  }
}

export default MainPage;
