import React from 'react';
import Author from './../common/Author/author';
import Button from './../common/Button/button';
import Dot from './../common/Dot/dot';
import Year from './Year';
import Cover from './Cover';
import Description from './Description';

import styled from 'styled-components';

const StyleCover = styled(Cover)`
	display: inline-block;
    position: relative;
    margin: 60px auto 0;
    font-size: .75em;
    color: #fff;
`;



export default class DescriptionPage extends React.Component {

	btnClick(){
    this.props.onChange();
  }

	render(){
		return (
			<div className={this.props.className}>	
				<Author>Чак Паланик</Author>
				<Year> (1232 - 1231)</Year>
				<Dot />
				<Description>
					Древнегреческий философ, один из учеников Сократа. 
					Проповедовал аскетизм и считал, что задача философии – понимание того, 
					что является для человека истинным благом.
				</Description>
				<StyleCover />

				<Button description onClick={this.btnClick.bind(this)} ></Button>
			</div>
		);
	}

} 