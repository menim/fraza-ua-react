import React from "react";
import Stroke from "./components/common/Stroke";
import QuotePage from "./components/QuotePage";
import DescriptionPage from "./components/DescriptionPage";
import axios from "axios";
import getDay from "./utils/getDay";
import hangingWords from "./utils/hangingWords";
import ReactSwipe from "react-swipe";
import styled from "styled-components";

const CenterQuotePage = styled(QuotePage)`
      text-align: center;
      height: 100%`;

const CenterDescriptionPage = styled(DescriptionPage)`
      text-align: center;
      height: 100%;
`;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      author: "",
      authorDescription: "",
      quote: "",
      years: ""
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.getData = this.getData.bind(this);
  }

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

  getData() {
    if('caches' in window){
      caches.match("https://spreadsheets.google.com/feeds/list/1BKHXoRcKufFnwvip3McTGEKgUX1u6OEPHcwUjvM240E/od6/public/values?alt=json")
      .then((response) => {
        if(response){
          response.json().then((response) => {
            let spreadsheetLen = response.feed.entry.length - 1;
            let data = response.feed.entry[getDay(spreadsheetLen)];
            this.setState({
              author: data.gsx$author.$t,
              authorDescription: hangingWords(data.gsx$authordescription.$t),
              quote: hangingWords(data.gsx$quote.$t),
              years: data.gsx$years.$t
            });
          })
        }
      })
     }
    axios
      .get("https://spreadsheets.google.com/feeds/list/1BKHXoRcKufFnwvip3McTGEKgUX1u6OEPHcwUjvM240E/od6/public/values?alt=json")
      .then(response => {
        response = response.data;
        let spreadsheetLen = response.feed.entry.length - 1;
        let data = response.feed.entry[getDay(spreadsheetLen)];
        this.setState({
          author: data.gsx$author.$t,
          authorDescription: hangingWords(data.gsx$authordescription.$t),
          quote: hangingWords(data.gsx$quote.$t),
          years: data.gsx$years.$t
        });
      });
  }

  componentDidMount() {
    this.getData();
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
            <CenterQuotePage
              onChange={this.next}
              author={this.state.author}
              quote={this.state.quote}
            />
          </div>
          <div>
            <CenterDescriptionPage
              onChange={this.prev}
              author={this.state.author}
              authordescription={this.state.authorDescription}
              years={this.state.years}
            />
          </div>
        </ReactSwipe>
      </div>
    );
  }
}
