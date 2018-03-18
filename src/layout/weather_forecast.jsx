import React from 'react';
// import Notifications from 'react-notify-toast';
// import GetBrowserGeoLocation from '../containers/geo_located';
// import InputDays from '../containers/input_days';
import GetDaysWeather from '../containers/detailed_forecast';
// import Products from '../containers/react_pre_loader';

const WeatherDetail = () => (
  <div>
    {/* <Products /> */}
    {/* <Notifications /> */}
    {/* <InputDays /> */}
    <GetDaysWeather />
    {/* <GetBrowserGeoLocation /> */}
  </div>
);

export default WeatherDetail;
