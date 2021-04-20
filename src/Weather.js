"use strict";

import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li>
            {`${this.props.data.date}: ${this.props.data.description}`}
            </li>
        );
    }
} 

export default Weather;