import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class GoogleMaps extends Component {
  componentDidMount() {
    const { google } = window;
    const mapData = this.mapDiv;
    const map = new google.maps.Map(mapData, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
    return map;
  }

  render() {
    return <div ref={(c) => { this.mapDiv = c; }} />;
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
