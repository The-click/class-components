import type { ICard, UIProps } from '../types';
import { Component } from 'react';

interface CardProps extends UIProps {
  data: ICard;
}

class Card extends Component<CardProps> {
  render() {
    return (
      <div className="grid grid-cols-4 gap-1 py-5 divide-x-2 divide-gray-300">
        <dt className="font-medium col-span-1 px-1 text-gray-900 dark:text-white font-semibold text-pretty">
          <span className="line-clamp-1">{this.props.data.name}</span>
        </dt>
        <dd className="text-gray-700 col-span-3 dark:text-gray-200 ">
          {this.props.data.description}
        </dd>
      </div>
    );
  }
}

export default Card;
