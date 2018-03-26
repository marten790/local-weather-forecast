import { connect } from 'react-redux';
import { getWeatherFailed, getWeatherRequested, getWeatherSucceeded } from '../reducers/weather-detail/days/actions';
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);
