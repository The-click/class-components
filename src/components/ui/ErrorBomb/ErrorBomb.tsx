import { Component } from 'react';

class ErrorBomb extends Component {
  render() {
    throw new Error('Oops');
    return <div>Oops</div>;
  }
}

export default ErrorBomb;
