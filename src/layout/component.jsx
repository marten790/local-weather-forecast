import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMaps from '../pages/components/google-maps';

import InputDays from '../pages/weather-detail/input-weather';
import GetDaysWeather from '../pages/weather-detail';

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
    this.props.getDetailedWeather(this.state.noOfDays);
    this.setState({ noOfDays: undefined });
  }

  onInputChange(event) {
    event.preventDefault();
    this.setState({ noOfDays: event.target.value });
  }

  render() {
    const { weatherdata, location } = this.props;
    return (
      <React.Fragment>
        {weatherdata.status === 'SUCCEEDED' && <InputDays onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} days={this.state.noOfDays} />}

        {weatherdata.status === 'FAILED' && <p>Error</p>}
        {weatherdata.status === 'REQUESTED' && <p>Loading.....</p>}
        {weatherdata.status === 'SUCCEEDED' && <GetDaysWeather weatherdata={weatherdata.weatherPayload} />}

        {location.status === 'FAILED' && <p>Error</p>}
        {location.status === 'REQUESTED' && <p>Loading.....</p>}
        {location.status === 'SUCCEEDED' && window.google.maps && <GoogleMaps lon={location.geoLocation.longitude} lat={location.geoLocation.latitude} />}
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
export default WeatherDetail;
