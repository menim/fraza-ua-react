import React, { Component } from 'react';
import './App.css';
import Stroke from './components/common/stroke';
import QuotePage from './components/QuotePage/index';

class App extends Component {
  render() {
    return (
      <div>
      <Stroke />
      <QuotePage />
      </div>
    );
  }
}

export default App;
