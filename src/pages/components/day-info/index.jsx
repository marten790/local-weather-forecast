import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const DayInfo = ({ weatherDataArray }) => (
  <React.Fragment>
    {weatherDataArray.map(dayWeatherData => (
      <div className="col-3 day-weather-data" data-qa="single-day-weather-data" key={dayWeatherData.dt}>
        <div className="day-weather-data__date">17 Feb</div>
        <div className="day-weather-data__temp">
          <div className="day-weather-data__temp__day" data-qa="single-day-weather-data-day">{dayWeatherData.temp.day}&#8451;</div>
          <div className="day-weather-data__temp__min">{dayWeatherData.temp.min}
            &#8451; <span className="day-weather-data__temp__min__small">min</span>
          </div>
          <div className="day-weather-data__temp__max">{dayWeatherData.temp.max}
            &#8451; <span className="day-weather-data__temp__max__small">max</span>
          </div>
        </div>
        <div className="day-weather-data__image" />
        <div className="day-weather-data__detail">Heavy Cloud</div>
      </div>
    ))}
  </React.Fragment>
);

DayInfo.propTypes = {
  weatherDataArray: PropTypes.arrayOf(PropTypes.shape({
    dt: PropTypes.number.isRequired,
    temp: PropTypes.shape({
      day: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};

export default DayInfo;
