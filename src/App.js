 import React, { Component } from "react";
import Stroke from "./components/common/Stroke/stroke";
import QuotePage from "./components/QuotePage";
import DescriptionPage from "./components/DescriptionPage";
import axios from 'axios';
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
        this.prev = this.prev.bind(this);
        this.state = {
            author: '',
            authorDescription: '',
            cover: '',
            linkTo: '',
            quote: '',
            years: ''
        }
       this.getData = this.getData.bind(this);
       this.getDayOfYear = this.getDayOfYear.bind(this);
       this.getDay = this.getDay.bind(this);
    }

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

                /* Get day of the full year 
                          @return {number}
                      */
  getDayOfYear() {
      let now = new Date(),
          start = new Date(now.getFullYear(), 0, 0),
          diff = now-start,
          oneDay = 864e5; //number of 24 hours day in seconds 86400000
      return Math.floor(diff/oneDay);
  }

                /* Get day of year and compare with spreadsheet length 
                @param {Number} datalen;
                @return {Number} day;
              */
  getDay(dataLength) {
      let day = 0;
      let dayOfYear = this.getDayOfYear();
      if((dayOfYear-dataLength)>dataLength){
        day = dayOfYear - dataLength*2;
      }
      else {
        day = (dayOfYear<=dataLength) ? dayOfYear : dayOfYear - dataLength;
      }

      return day;
  }


  getData() {
      axios.get('http://spreadsheets.google.com/feeds/list/17T8jqTsiOdfGXKhAg21cpJAfV6zSHzuMF-nXbk0ltHs/od6/public/values?alt=json').then((response)=>{
            
          let spreadsheetLen = response.data.feed.entry.length-1
          let data = response.data.feed.entry[this.getDay(spreadsheetLen)];
      this.setState({
          author:  data.gsx$author.$t,
          authorDescription: data.gsx$authordescription.$t,
          cover: data.gsx$cover.$t,
          linkTo: data.gsx$linktolitress.$t,
          quote: data.gsx$qoute.$t,
          years: data.gsx$years.$t,
        });

      });
  }

    componentDidMount() {
      this.getData();
  }

  render() {
      console.log(this.state);
    return (
      <div>
        <Stroke />
        <ReactSwipe ref="rffeactSwipe"
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

