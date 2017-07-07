import React from 'react';
import Author from './../common/Author/author';
import Button from './../common/Button/button';



export default class DescriptionPage extends React.Component {

	btnClick(){
    this.props.onChange();
  }
	render(){
		return (
			<div>
				<Author>Чак Паланик</Author>
				<Button onClick={this.btnClick.bind(this)} ></Button>
			</div>
		);
	}

} 