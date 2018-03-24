import { combineReducers } from 'redux';
// import app from './app';

import WeatherReducer from './weather-detail/input-weather';
import DaysWeather from './weather-detail/days-weather';
import GeoWeather from './weather-detail/geo-weather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  location: GeoWeather,
  days: DaysWeather,
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
