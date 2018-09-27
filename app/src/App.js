import React, { Component } from 'react';
import { MainPage } from './components';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainPage />
      </div>
    );
  }
}

export default App;
