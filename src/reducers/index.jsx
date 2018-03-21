import { combineReducers } from 'redux';
// import app from './app';

import WeatherReducer from './weather-detail/input-weather';
import DaysWeather from './weather-detail/days-weather';
import GeoWeather from './weather-detail/geo-weather';
import GifsList from './gif-search/image-list';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  location: GeoWeather,
  days: DaysWeather,
  gifs: GifsList,
});

export default rootReducer;
