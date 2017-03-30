import React, { Component } from 'react';
import style from './App.css';
import background from './pictures/background.png'
import Stroke from './components/common/Stroke/stroke';
import QuotePage from './components/QuotePage/index';

class App extends Component {


  render() {
    return (
      <div style={{backgroundImage: "url('../pictures/background.png')"}}>
        <Stroke />
        <QuotePage />
      </div>
    );
  }
}

export default App;
