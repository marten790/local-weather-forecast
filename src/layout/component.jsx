import React from 'react';
import GetBrowserGeoLocation from '../pages/weather-detail/geo-located';
import InputDays from '../pages/weather-detail/input-days';
import GetDaysWeather from '../pages/weather-detail';
// set partials conditionally to show only if data is available.
// Remove state from all children components and only have the input passting state to actions.
// set default state to 4 days in reducer and not in action
const WeatherDetail = ({ days }) => (
  <React.Fragment>
    {console.log('days', days)}
    <InputDays />
    <GetDaysWeather />
    <GetBrowserGeoLocation />
  </React.Fragment>
);


export default WeatherDetail;
