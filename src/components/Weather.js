import React from 'react';
import WeatherDay from './WeatherDay.js';

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

export default Weather;
