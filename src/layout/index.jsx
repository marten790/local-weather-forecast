import { connect } from 'react-redux';
import { getWeatherFailed, getWeatherRequested, getWeatherSucceeded } from '../reducers/weather-detail/days/actions';
import { fetchMapLocationRequested, fetchMapLocationSucceeded } from '../reducers/weather-detail/map/actions';
import WeatherDetail from './component';

import getDetailedWeather from '../api/get-weather';

const mapStateToProps = state => state.days;

function mapDispatchToProps(dispatch) {
  return {
    getDetailedWeather: () => {
      dispatch(getWeatherRequested());
      getDetailedWeather()
        .then(data => dispatch(getWeatherSucceeded(data)))
        .catch(() => dispatch(getWeatherFailed()));
    },
    getGeoLocation: () => {
      dispatch(fetchMapLocationRequested());

      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(fetchMapLocationRequested());
        dispatch(fetchMapLocationSucceeded(position.coords));
        console.log('position', position.coords);
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);
