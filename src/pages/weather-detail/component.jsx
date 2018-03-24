import React from 'react';
import PropTypes from 'prop-types';
import DayInfo from '../components/day-info';

const GetDaysWeather = ({ days }) => (
  <React.Fragment>
    {days.error && <p>Error</p>}
    {!days.data && <p>Loading</p>}
    {days.data && !days.error && <DayInfo weatherDataArray={days.data.list} />}
  </React.Fragment>
);

GetDaysWeather.propTypes = {
  days: PropTypes.shape(),
};
GetDaysWeather.defaultProps = {
  days: {},
};

export default GetDaysWeather;
