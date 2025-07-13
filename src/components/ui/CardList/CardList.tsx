import Card from '../Card/Card';
import type { ICard, UIProps } from '../types';
import { Component } from 'react';

interface CardListProps extends UIProps {
  data: ICard[];
}

class CardList extends Component<CardListProps> {
  render() {
    return (
      <div className={`flow-root ${this.props.className}`}>
        <dl className="-my-3 divide-y divide-gray-200 text-sm dark:divide-gray-700">
          {this.props.data.map((cardData) => (
            <Card key={cardData.name} data={cardData} />
          ))}
        </dl>
      </div>
    );
  }
}

export default CardList;
