import React from 'react';
import Logo from './Logo/logo';
import logo from './Logo/head.png';
import Quote from './Quote/Quote';
import Dot from './../common/Dot/dot';
import Author from './../common/Author/author';
import Button from './../common/Button/button';


export default class QuotePage extends React.Component {

  btnClick(){
    this.props.onChange();
  }

render(){
  return (
   <div className={this.props.className}>
      <Logo src={logo} alt='Фраза дня' />
      <Quote>
        {this.props.quote}
      </Quote>
      <Dot />
      <Author> {this.props.author} </Author>
      <Button onClick={this.btnClick.bind(this)} ></Button>
    </div>
    );
  }
}

