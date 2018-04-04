import React from 'react';
import DayInfo from '../components/day-info';

const GetDaysWeather = data => (
  <div className="container">
    {data.weatherdata.error && <p>Error</p>}
    {data.weatherdata.data && !data.weatherdata.error
      && <div className="row"><DayInfo weatherDataArray={data.weatherdata.data.list} /></div>}
  </div>
);

export default GetDaysWeather;
