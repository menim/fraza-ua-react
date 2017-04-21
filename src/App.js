import React, { Component } from 'react';
import Stroke from './components/common/Stroke/stroke';
import QuotePage from './components/QuotePage/index';
import ReactSwipe from 'react-swipe';

import style from './App.css';

class App extends Component {
	next() {
		this.refs.reactSwipe.next();
	}

	prev() {
		this.refs.reactSwipe.prev();
	}

  render() {
    return (
    <div>
      <ReactSwipe ref="reactSwipe" className="mySwipe" swipeOptions={{continuous: false}}>
        <div className={style.wrapper}>
          <Stroke />
          <QuotePage/>
        </div> 
        <div>
        	sdlkfs; kslk s;dfk ;skd ;skf ;l
        </div>
      </ReactSwipe>
        <div>
        	<button type="button" onClick={this.next.bind(this)}>Right</button>
        	<button type="button" onClick={this.prev.bind(this)}>Left</button>
        </div>
     </div>
    );
  }
}

export default App;
