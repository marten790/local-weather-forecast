import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetBrowserGeoLocation from '../pages/weather-detail/geo-located';
import InputDays from '../pages/weather-detail/input-days';
import GetDaysWeather from '../pages/weather-detail';
// set partials conditionally to show only if data is available.
// Remove state from all children components and only have the input passting state to actions.
// set default state to 4 days in reducer and not in action
// update all PropTypes to have correct INIT states and remove reducers not needed.
// Possibly combine the input days and getweather reducers

// Best way to set INIT state?
class WeatherDetail extends Component {
  componentDidMount() {
    this.props.getDetailedWeather();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.days.error && <p>Error: this.props.days.error</p>}
        {!this.props.days.data && <p>Loading.....</p>}
        {!this.props.days.error
          && this.props.days.data
          && <InputDays />}
        {!this.props.days.error
            && this.props.days.data
            && <GetDaysWeather />}
        {!this.props.days.error
            && this.props.days.data
        && <GetBrowserGeoLocation />}
      </React.Fragment>

    );
  }
}
WeatherDetail.propTypes = {
  getDetailedWeather: PropTypes.func,
  days: PropTypes.shape(), // eslint-disable-line react/forbid-prop-types,
};
WeatherDetail.defaultProps = {
  getDetailedWeather: [],
  days: {},
};
export default WeatherDetail;

// days: PropTypes.arrayOf(PropTypes.string)
// days: PropTypes.shape({
//   name:PropTypes.string,
//   name:PropTypes.string,
// })
