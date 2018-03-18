import { combineReducers } from 'redux';
import WeatherReducer from '../reducer_weather';
import GeoWeather from '../reducer_geo_weather';
import DaysWeather from '../reducer_days_weather';
import GifsList from '../reducer_gifs';
// import products from './products/reducer';
// console.log('DaysWeather', DaysWeather);
const rootReducer = combineReducers({
  weather: WeatherReducer,
  location: GeoWeather,
  days: DaysWeather,
  gifs: GifsList,
});
// products: products,

export default rootReducer;
