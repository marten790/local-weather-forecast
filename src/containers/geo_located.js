import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocationMap } from '../actions/index';
import _ from 'lodash';
import Notifications, {notify} from 'react-notify-toast';

import GoogleMaps from '../components/google_maps';

class GetBrowserGeoLocation extends Component {

  renderWeather(cityData, index){
    const lon = cityData.longitude;
    const lat = cityData.latitude;

  	return (
  		<tr key={index}>
        <td><GoogleMaps lon={lon} lat={lat} /></td>
  		</tr>
  	);
  }

  componentWillMount() {
    this.props.getLocationMap();
    this.renderWeather = this.renderWeather.bind(this);
  }

  	render(){
        if(this.props.location.error){
          notify.show(this.props.location.payload.message, 'error', 7000);
        }

        if(!this.props.location) {
          return (
            <div>Loading...</div>
          )};

  		return(
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

const mapStateToProps = ({location}) => {

  return {location};
};

export default connect(mapStateToProps, {getLocationMap})(GetBrowserGeoLocation);
