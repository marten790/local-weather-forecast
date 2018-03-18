import React from 'react';
import PropTypes from 'prop-types';

const DayWeather = refs => (
  refs.weatherDataArray.map(dayWeatherData => (
    <div key={dayWeatherData.dt}>
      <div>17 Feb</div>
      <div>{dayWeatherData.temp.day} | {dayWeatherData.temp.min} {dayWeatherData.temp.max}</div>
      <div>Image</div>
      <div>Heavy Cloud</div>
    </div>
  ))
);

DayWeather.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
};
DayWeather.defaultProps = {
  lat: null,
  lon: null,
};
export default DayWeather;
