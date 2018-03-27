import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class GoogleMaps extends Component {
  componentDidMount() {
    const { google } = window;
    const mapData = this.mapDiv;
    const yourCoords = {
      lat: this.props.lat,
      lng: this.props.lon,
    };
    const map = new google.maps.Map(mapData, {
      zoom: 12,
      center: yourCoords,
    });

    const marker = new google.maps.Marker({
      position: yourCoords,
      map,
      title: 'Your estimated location',
    });
    marker.setMap(map);

    return map;
  }

  render() {
    return (
      <table className="table table-hover location-map">
        <thead>
          <tr>
            <th>Your location:  </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div ref={(c) => { this.mapDiv = c; }} /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
GoogleMaps.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
};
GoogleMaps.defaultProps = {
  lat: null,
  lon: null,
};
export default GoogleMaps;
