import Header from '@/components/shared/header/Header';
import { Component } from 'react';

interface MainPageProps {
  searchElements: (seachValue: string) => void;
}

class MainPage extends Component<MainPageProps> {
  render() {
    return (
      <>
        <Header searchElements={this.props.searchElements} />
      </>
    );
  }
}

export default MainPage;
