import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DayWeather extends Component {
  componentDidMount() {
    const mapData = this.weatherData;
    console.log('mapData', mapData);
      <div>
        { mapData.map(dayWeatherData => (
          <div key={dayWeatherData.dt}>
            <div>17 Feb</div>
            <div>{dayWeatherData.temp.day} | {dayWeatherData.temp.min} {dayWeatherData.temp.max}</div>
            <div>Image</div>
            <div>Heavy Cloud</div>
          </div>
        )) }
      </div>;
  }

  render() {
    return <div ref={(c) => { this.weatherData = c; }} />;
  }
}


DayWeather.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
};
DayWeather.defaultProps = {
  lat: null,
  lon: null,
};
export default DayWeather;
