import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class WeatherDay extends React.Component {
  render() {
    return (
      <ListGroup.Item key={this.props.idx}>
        <FontAwesomeIcon icon={faCloudSunRain} className='mr-sm-2'/>
        {`
        ${this.props.day.date}
        ${this.props.day.forcast}
        `}
      </ListGroup.Item>
    );
  }
}
