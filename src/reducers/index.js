import { combineReducers } from 'redux';
import  WeatherReducer  from './reducer_weather';
import  GeoWeather  from './reducer_geo_weather';
import  DaysWeather  from './reducer_days_weather';
import  GifsList  from './reducer_gifs';
// import  GlobalErrors  from './reducer_global_errors';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  location: GeoWeather,
  days: DaysWeather,
  gifs: GifsList
});
// errors: GlobalErrors

export default rootReducer;
