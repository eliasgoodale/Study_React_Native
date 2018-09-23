import React, { Component } from 'react';
import Title from './Components/Title';
import Byline from './Components/Byline';
import Description from './Components/Description';

export default class NewsItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		this.setState({
			expanded: !this.state.expanded
		});
	}
	
	renderBody() {
		if (this.state.expanded) {
			return(
					<div>
						<Byline>
							{this.props.bylineText}
						</Byline>
						<Description>
							{this.props.descriptionText}
						</Description>

					</div>
				);
		}
		return null;
	}

	render() {
		return (
			<div 
				className="news-item"
				onClick={this.onClick}
			>
      	{/* <Image /> */}
      	<Title 
					highlighted
				>
					{this.props.titleText}
				</Title>
				{ this.renderBody() }
      </div>
    );
  }
}
