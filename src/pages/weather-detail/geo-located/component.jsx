import React, { Component } from 'react';
import { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';
import GoogleMaps from '../../components/google-maps';
import './index.scss';

class GetBrowserGeoLocation extends Component {
  componentWillMount() {
    this.props.getLocationMap();
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
      <table className="table table-hover location-map">
        <thead>
          <tr>
            <th>Your location:  </th>
          </tr>
        </thead>
        <tbody>
          { this.props.location.map((current) => {
            const lon = current.longitude;
            const lat = current.latitude;

            return (
              <tr key={lat + lon}>
                <td><GoogleMaps lon={lon} lat={lat} /></td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    );
  }
}

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
export default GetBrowserGeoLocation;
