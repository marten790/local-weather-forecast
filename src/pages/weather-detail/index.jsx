import React from 'react';
import PropTypes from 'prop-types';
import DayInfo from '../components/day-info';

const GetDaysWeather = props => (
  <div className="container">
    {props.weatherdata.error && <p>Error</p>}
    {props.weatherdata.data && !props.weatherdata.error
      && <div className="row"><DayInfo weatherDataArray={props.weatherdata.data.list} /></div>}
  </div>
);

GetDaysWeather.propTypes = {
  weatherdata: PropTypes.shape({
    error: PropTypes.shape({}),
    data: PropTypes.shape({
      list: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
};
GetDaysWeather.defaultProps = {
  weatherdata: undefined,
};

export default GetDaysWeather;
