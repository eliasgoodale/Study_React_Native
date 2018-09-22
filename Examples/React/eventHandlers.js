import React, { Component, PropTypes } from 'react';
import Title from './Title'

export default class NewsItem extends Component {
	constructor(props) {
		super(props);
		// We do this here because React internally optimizes to make it more efficient
		this.onClick = this.onClick.bind(this);
	}
	render() {
		return (
			<div 
				className="news-item"
				// We are binding the render method's this context to the onClick method when adding it as a click handler, however, there is a better way to do this by adding a this binding within the components constructor
				// onClick={this.onClick.bind(this)}
			>
      	<Image />
      	<Title />
      	<Byline />
      	<Description />
      </div>
    );
  }
}