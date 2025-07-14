import Header from '@/components/shared/header/Header';
import Main from '@/components/shared/main/Main';
import { Component } from 'react';

interface MainPageProps {
  searchElements: (seachValue: string) => void;
}

class MainPage extends Component<MainPageProps> {
  render() {
    return (
      <div className="w-140">
        <Header searchElements={this.props.searchElements} />
        <Main
          data={[
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
          ]}
        />
      </div>
    );
  }
}

export default MainPage;
