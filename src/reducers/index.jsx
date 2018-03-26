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

// import { routerReducer as router } from 'react-router-redux';
// import { combineReducers } from 'redux';
//
// import daysWeather from './weather-detail/days-weather';
// import geoWeather from './weather-detail/geo-weather';
// import inputWeather from './weather-detail/input-weather';
//
// const rootReducer = combineReducers({ daysWeather, geoWeather, inputWeather, router });
// export default rootReducer;
