import './Loader.css';
import type { UIProps } from '../types';
import { Component } from 'react';

class Loader extends Component<UIProps> {
  render() {
    return (
      <div className={`lds-default ${this.props.className}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
