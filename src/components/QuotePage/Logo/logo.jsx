import React from 'react';
import logo from './head.png';
import style from './style.css';

const Logo = () => {
  return (
    <img src={logo} className={style.logo} alt="Фраза дня" />
  )
}

export default Logo;