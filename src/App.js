import React, { Component } from 'react';
import Stroke from './components/common/Stroke/stroke';
import QuotePage from './components/QuotePage/index';

import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Stroke />
        <QuotePage />
      </div>
    );
  }
}

export default App;
