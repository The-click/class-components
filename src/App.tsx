import './App.css';
import { Component } from 'react';
import MainPage from './pages/MainPage';
import ErrorBoundary from './components/shared/error/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
        <MainPage />
      </ErrorBoundary>
    );
  }
}

export default App;
