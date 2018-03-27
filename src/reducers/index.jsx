import { combineReducers } from 'redux';
// import app from './app';

import getNumberOfDays from './weather-detail/days';
import getWeather from './weather-detail/input-weather';
import getLocation from './weather-detail/map';

const rootReducer = combineReducers({
  days: getNumberOfDays,
  weather: getWeather,
  location: getLocation,
});

export default rootReducer;
