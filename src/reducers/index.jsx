import { combineReducers } from 'redux';
// import app from './app';

import daysWeather from './weather-detail/days';
import numberOfDaysVisible from './weather-detail/input-weather';
import getLocation from './weather-detail/map';

const rootReducer = combineReducers({
  weatherdata: daysWeather,
  noOfDays: numberOfDaysVisible,
  location: getLocation,
});

export default rootReducer;
