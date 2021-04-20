import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Weather extends React.Component {
    render() {
        return(
            <ListGroup.Item>
                <FontAwesomeIcon icon={faCloudSunRain} className="mr-sm-2"/>
                {`${this.props.data.date}: ${this.props.data.description}`}
            </ListGroup.Item>
        );
    }
} 

export default Weather;