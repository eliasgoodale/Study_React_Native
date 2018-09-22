import React, { Component, PropTypes } from 'react';
import Title from './Title'

export default class NewsItem extends Component {

	render() {
		return (
			<div 
				className="news-item"
				//We are binding the render method's this context to the onClick method when adding it as a click handler
				onClick={this.onClick.bind(this)}
			>
      	<Image />
      	<Title />
      	<Byline />
      	<Description />
      </div>
    );
  }
}