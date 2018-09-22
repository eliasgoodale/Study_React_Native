// You must add the PropTypes to the import list to avoid warnings
import React, { Component, PropTypes } from 'react';

export default class Title extends Component {

    render() {
        return (
            //This is how props are inserted into a container
            <h1>
                { this.props.titleText }
            </h1>
        );
    }
}

// *this* is how we define props belonging to Title 
Title.propTypes = {
    // You may use the .isRequired to indicate required type of a prop
    titleText: PropTypes.string.isRequired
    // You may use other types as well
    highlighted: PropTypes.bool
    fontSize: PropTypes.number
};