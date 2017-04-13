import React from 'react';
import style from './style.css';

export default class Quote extends React.Component {
	render() {
		return ( 
		<p id="quote" className={style.quote}>
			Картина уничтожения русской интеллигенции 
			представляется мне территорией, 
			подвергнутой бомбардировке: некоторые прекрасные здания ещё сохранились, но стоят обнажённо 
			и одиноко среди руин и разрушенных улиц
		</p>
		)
	}
}