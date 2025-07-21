import type { UIProps } from '../types';
import './Button.css';
import { Component } from 'react';

interface ButtonProps extends UIProps {
  onClick: () => void;
  children?: React.ReactNode;
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type={'button'}
        className={`${this.props.className || ''} cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm  text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50`}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
