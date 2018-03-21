import React from 'react';
import Notifications from 'react-notify-toast';
import GetBrowserGeoLocation from '../pages/weather-detail/geo-located';
import InputDays from '../pages/weather-detail/input-days';
import GetDaysWeather from '../pages/weather-detail';
import { connect } from 'react-redux';

const WeatherDetail = ({ state }) => (
  <div>
    {/* <Notifications /> */}
    <InputDays />
    <GetDaysWeather />
    <GetBrowserGeoLocation />
  </div>
);


const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(WeatherDetail);
