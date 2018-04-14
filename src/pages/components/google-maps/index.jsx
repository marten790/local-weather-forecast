import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class GoogleMaps extends Component {
  componentDidMount() {
    const mapData = this.mapDiv;
    const { maps } = window.google;
    const { lat, lon } = this.props;
    const yourCoords = {
      lat,
      lng: lon,
    };
    const map = new maps.Map(mapData, {
      zoom: 12,
      center: yourCoords,
    });

    const marker = new maps.Marker({
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
