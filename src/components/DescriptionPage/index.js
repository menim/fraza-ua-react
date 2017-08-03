import React from "react";
import Author from "./../common/Author/author";
import Button from "./../common/Button/button";
import Dot from "./../common/Dot/dot";
import Year from "./Year";
import Description from "./Description";


export default class DescriptionPage extends React.Component {
	btnClick() {
		this.props.onChange();
	}

	render() {

		return (
			<div className={this.props.className}>
				<Author>{this.props.author}</Author>
				<Year>{this.props.years}</Year>
				<Dot />
				<Description>
						{this.props.authordescription}
				</Description>
				<Button description onClick={this.btnClick.bind(this)} />
			</div>
		);
	}
}
