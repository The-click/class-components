import './App.css';
import { Component } from 'react';

class App extends Component {
  state = { data: [] };

  getData = (query: string) => {
    this.setState({
      data: [
        { name: 'Blabla', description: '123' },
        { name: 'Qas', description: 'Zxc' },
      ],
    });
  };

  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default App;
