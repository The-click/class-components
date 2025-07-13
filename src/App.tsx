import './App.css';
import { Component } from 'react';
import MainPage from './pages/MainPage';

class App extends Component {
  state = { data: [] };

  getData = () => {
    this.setState({
      data: [
        { name: 'Blabla', description: '123' },
        { name: 'Qas', description: 'Zxc' },
      ],
    });
  };

  render() {
    return <MainPage searchElements={() => {}} />;
  }
}

export default App;
