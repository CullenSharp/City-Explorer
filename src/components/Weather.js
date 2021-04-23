import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    return(
      this.props.forcasts.map((day, idx) => (
        <WeatherDay day={day} key={idx}/>
      )
      )
    );
  }
}

export default Weather;
