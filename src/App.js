import React, { Component } from "react";
import Stroke from "./components/common/Stroke/stroke";
import QuotePage from "./components/QuotePage";
import DescriptionPage from "./components/DescriptionPage";
import ReactSwipe from "react-swipe";
import styled from "styled-components";

const CenterQuotePage = styled(QuotePage)`
      text-align: center;
      height: 100%`;


const CenterDescriptionPage = styled(DescriptionPage)`
      text-align: center;
      height: 100%;
`; 

 export default class App extends Component {

    constructor(){
        super();

        this.next = this.next.bind(this);
        this.prev = this.next.bind(this);
    }

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

  render() {
    return (
      <div>
        <Stroke />
        <ReactSwipe ref="reactSwipe"
          className="mySwipe"
          swipeOptions={{ continuous: false }}
        >
          <div>
           <CenterQuotePage onChange={this.next} />
          </div>
          <div>
            <CenterDescriptionPage onChange={this.prev} />
          </div>
        </ReactSwipe>
      </div>    
    );
  }
}

