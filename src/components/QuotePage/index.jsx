import React from 'react';
import Logo from './Logo/logo';
import Quote from './Quote/Quote';
import Dot from './../common/Dot/dot';
import Author from './../common/Author/author';
import styles from './index.css';

export default class QuotePage extends React.Component {
  
render(){
  return (
    <div className={styles.quoteCommon}>
      <Logo />
      <Quote />
      <Dot />
      <Author />
    </div>
    );
  }
}