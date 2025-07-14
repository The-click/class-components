import CardList from '@/components/ui/CardList/CardList';
import type { ICard } from '@/components/ui/types';
import { Component } from 'react';

interface MainProps {
  data: ICard | ICard[] | undefined;
}

class Main extends Component<MainProps> {
  render() {
    return (
      <main className="mt-2 flex items-center gap-x-3">
        <CardList
          className="w-200"
          data={Array.isArray(this.props.data) ? this.props.data : []}
        />
      </main>
    );
  }
}

export default Main;
