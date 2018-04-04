import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMaps from '../pages/components/google-maps';
// import GoogleMaps from '../../components/google-maps';

import InputDays from '../pages/weather-detail/input-weather';
import GetDaysWeather from '../pages/weather-detail';
// set partials conditionally to show only if data is available.
// Remove state from all children components and only have the input passing state to actions.
// set default state to 4 days in reducer and not in action
// update all PropTypes to have correct INIT states and remove reducers not needed.
// Possibly combine the input days and getweather reducers

class WeatherDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { noOfDays: undefined };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.props.getDetailedWeather();
    this.props.getGeoLocation();
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('OnSubmit OUTSIDE', this.state.noOfDays);
    this.props.getDetailedWeather(this.state.noOfDays);
    this.setState({ noOfDays: undefined });
  }

  onInputChange(event) {
    event.preventDefault();
    console.log('OnChange OUTSIDE', event.target.value);
    this.setState({ noOfDays: event.target.value });
  }

  render() {
    const { weatherdata } = this.props;
    const { location } = this.props;
    return (
      <React.Fragment>
        {weatherdata.status === 'SUCCEEDED' && <InputDays onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} days={this.state.noOfDays} />}

        {weatherdata.status === 'FAILED' && <p>Error</p>}
        {weatherdata.status === 'REQUESTED' && <p>Loading.....</p>}
        {weatherdata.status === 'SUCCEEDED' && <GetDaysWeather weatherdata={weatherdata.weatherPayload} />}

        {location.status === 'FAILED' && <p>Error</p>}
        {location.status === 'REQUESTED' && <p>Loading.....</p>}
        {location.status === 'SUCCEEDED' && <GoogleMaps lon={location.geoLocation.longitude} lat={location.geoLocation.latitude} />}
      </React.Fragment>

    );
  }
}

WeatherDetail.propTypes = {
  getDetailedWeather: PropTypes.func,
  getGeoLocation: PropTypes.func,
  weatherdata: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

WeatherDetail.defaultProps = {
  getDetailedWeather: undefined,
  getGeoLocation: undefined,
  weatherdata: undefined,
  location: undefined,
};
// WeatherDetail.propTypes = {
//   getDetailedWeather: PropTypes.func,
//   days: PropTypes.shape(), // eslint-disable-line react/forbid-prop-types,
// };
// WeatherDetail.defaultProps = {
//   getDetailedWeather: [],
//   days: {},
// };
export default WeatherDetail;

// days: PropTypes.arrayOf(PropTypes.string)
// days: PropTypes.shape({
//   name:PropTypes.string,
//   name:PropTypes.string,
// })
