import React from 'react';
import LinkToBook from './LinkToBook';
import BookCover from './BookCover';


export default class Cover extends React.Component {

	render(){
		return (
			<a href="https://www.litres.ru" className={this.props.className}>
				<LinkToBook>Купить книгу</LinkToBook>
				<BookCover />
			</a>
			);
	}
}