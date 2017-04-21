import React from 'react';
import styles from './style.css';

const Button = (props) => {
		return (
				<button onClick={props.goToDescript} aria-label="Перейти до опису автора" className={styles.Btn}></button>
			);
	}


export default Button;