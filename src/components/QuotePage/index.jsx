import React from 'react';
import Logo from './Logo/logo';
import Quote from './Quote/Quote';
import Dot from './../common/Dot/dot';
import Author from './../common/Author/author';
import Button from './../common/Button/button';
import styles from './index.css';

export default class QuotePage extends React.Component {
  btnClick(){
    this.props.onChange();
  }
render(){
  return (
    <div className={styles.quoteCommon}>
      <Logo />
      <Quote />
      <Dot />
      <Author />
      <Button goToDescript={this.btnClick.bind(this)}/>
    </div>
    );
  }
}