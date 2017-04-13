import React from 'react';
import Logo from './Logo/logo';
import Quote from './Quote/Quote';
import Dot from './../common/Dot/dot';

export default class QuotePage extends React.Component {
	
render(){
	return (
		<div>
			<Logo />
			<Quote />
			<Dot />
		</div>
		);
	}
}