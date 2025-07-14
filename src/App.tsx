import './App.css';
import { Component } from 'react';
import MainPage from './pages/MainPage';
import { AppStore } from './store/AppStore';

class App extends Component {
  state = { data: [] };

  getData = () => {
    this.setState({
      data: [
        { name: 'Blabla', description: '123' },
        { name: 'Qas', description: 'Zxc' },
      ],
    });

    console.log(AppStore.getData(''));
  };

  componentDidMount(): void {
    console.log(AppStore.getData(''));
  }

  render() {
    return <MainPage searchElements={() => {}} />;
  }
}

export default App;
