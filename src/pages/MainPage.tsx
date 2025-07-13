import Header from '@/components/shared/header/Header';
import Card from '@/components/ui/Card/Card';
import CardList from '@/components/ui/CardList/CardList';
import { Component } from 'react';

interface MainPageProps {
  searchElements: (seachValue: string) => void;
}

class MainPage extends Component<MainPageProps> {
  render() {
    return (
      <div className="w-140">
        <Header searchElements={this.props.searchElements} />
        <CardList
          className="w-200"
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
