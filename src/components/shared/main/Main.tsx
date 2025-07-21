import Card from '@/components/ui/Card/Card';
import CardList from '@/components/ui/CardList/CardList';
import type { ICard, UIProps } from '@/components/ui/types';
import { Component } from 'react';
import Loader from '@/components/ui/Loader/Loader';

interface MainProps extends UIProps {
  data: ICard | ICard[] | undefined;
  loading: boolean;
  error: string;
}

class Main extends Component<MainProps> {
  render() {
    if (this.props.loading) {
      return (
        <main className={`${this.props.className}`}>
          <Loader />
        </main>
      );
    }

    if (this.props.error) {
      return (
        <main className={`${this.props.className}`}>
          <h1>Error: {this.props.error}</h1>
        </main>
      );
    }

    return (
      <main className={`${this.props.className}`}>
        <CardList
          className="w-200"
          data={Array.isArray(this.props.data) ? this.props.data : []}
        />
        <Card
          className="w-200"
          data={
            Array.isArray(this.props.data) || !this.props.data
              ? { name: '', description: '' }
              : this.props.data
          }
        />
      </main>
    );
  }
}

export default Main;
