import React, { Component } from "react";
import Stroke from "./components/common/Stroke/stroke";
import QuotePage from "./components/QuotePage/index";
import DescriptionPage from "./components/DescriptionPage/index";
import ReactSwipe from "react-swipe";
import styled from "styled-components";

const CenterQuotePage = styled(QuotePage)`
      text-align: center;`;

 export default class App extends Component {
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
        <ReactSwipe
          ref="reactSwipe"
          className="mySwipe"
          swipeOptions={{ continuous: false }}
        >
          <div>
            <CenterQuotePage onChange={this.next.bind(this)} />
          </div>
          <div>
            <Stroke />
            <DescriptionPage onChange={this.prev.bind(this)} />
          </div>
        </ReactSwipe>
      </div>
    );
  }
}

