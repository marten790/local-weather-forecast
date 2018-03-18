import React, { Component } from 'react';
import { notify } from 'react-notify-toast';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLocationMap } from '../reducers/ui/actions';
import GoogleMaps from '../components/google-maps/google_maps';


class GetBrowserGeoLocation extends Component {
  componentWillMount() {
    this.props.getLocationMap();
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData, index) {
    const lon = cityData.longitude;
    const lat = cityData.latitude;

    return (
      <tr key={index}>
        <td><GoogleMaps lon={lon} lat={lat} /></td>
      </tr>
    );
  }

  render() {
    if (this.props.location.error) {
      notify.show(this.props.location.payload.message, 'error', 7000);
    }

    if (!this.props.location) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Your location:  </th>
          </tr>
        </thead>
        <tbody>
          { this.props.location.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ location }) => ({ location });

GetBrowserGeoLocation.propTypes = {
  location: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  payload: PropTypes.object, // eslint-disable-line react/forbid-prop-types,
  message: PropTypes.string, // eslint-disable-line react/forbid-prop-types,
  getLocationMap: PropTypes.func,
};
GetBrowserGeoLocation.defaultProps = {
  location: [], // eslint-disable-line react/forbid-prop-types,
  payload: {}, // eslint-disable-line react/forbid-prop-types,
  message: '', // eslint-disable-line react/forbid-prop-types,
  getLocationMap: [], // eslint-disable-line react/forbid-prop-types,
};

export default connect(mapStateToProps, { getLocationMap })(GetBrowserGeoLocation);
