import { combineReducers } from 'redux';
import  WeatherReducer  from './reducer_weather';
import  GeoWeather  from './reducer_geo_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  location: GeoWeather
});

export default rootReducer;
