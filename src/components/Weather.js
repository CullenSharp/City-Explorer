"use strict";

import React from 'react';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            {`${this.props.data.date}: ${this.props.data.description}`}
            </>
        );
    }
} 