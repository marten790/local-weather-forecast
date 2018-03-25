import React from 'react';
import DayInfo from '../components/day-info';

const GetDaysWeather = data => (
  <React.Fragment>
    {data.weatherdata.error && <p>Error</p>}
    {data.weatherdata.data && !data.weatherdata.error
      && <DayInfo weatherDataArray={data.weatherdata.data.list} />}
  </React.Fragment>
);

export default GetDaysWeather;
