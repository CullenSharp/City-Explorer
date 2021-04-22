import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Weather extends React.Component {
  render() {
    return(
      this.props.weather.map((day, idx) => (
        <WeatherDay day={day} idx={idx}/>
      )
      )
    );
  }
} 

class WeatherDay extends React.Component {
  render() {
    return (
      <ListGroup.Item key={this.props.idx}>
        <FontAwesomeIcon icon={faCloudSunRain} className="mr-sm-2"/>
        {`
        ${this.props.day.date}
        ${this.props.day.forcast}
        `}
      </ListGroup.Item>
    );
  }
} 

export default Weather;
