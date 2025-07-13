import './App.css';
import { Component } from 'react';
import MainPage from './pages/MainPage';

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
    return <MainPage />;
  }
}

export default App;
