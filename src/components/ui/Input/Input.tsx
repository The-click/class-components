import type { UIProps } from '../types';
import './Input.css';
import { Component, type HTMLInputTypeAttribute } from 'react';

interface InputProps extends UIProps {
  value: string;
  onChage: (newValue: string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

class Input extends Component<InputProps> {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={(e) => this.props.onChage(e.target.value)}
        placeholder={this.props.placeholder}
        type={this.props.type || 'text'}
        className={`${this.props.className || ''} block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 rounded-md sm:text-sm/6 bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300`}
      ></input>
    );
  }
}

export default Input;
