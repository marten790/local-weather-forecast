import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocationWeather } from '../actions/index';
import _ from 'lodash';

import Chart from '../components/chart';
import GoogleMaps from '../components/google_maps';


class GetBrowserGeoLocation extends Component {

  renderWeather(cityData){
    console.log('cityData', cityData)
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(location => location.main.temp), (temp) => temp - 273.15);
    const humidities = cityData.list.map(location => location.main.humidity);
    const pressure = cityData.list.map(location => location.main.pressure);
    const {lon, lat} = cityData.city.coord;
        return (
    <tr key={name}>
      <td><GoogleMaps lon={lon} lat={lat} /></td>
      <td>
        <Chart data={temps} color="blue" units="°C"/>
      </td>
      <td>
        <Chart data={humidities} color="orange" units="kPa" />
      </td>
      <td>
        <Chart data={pressure} color="green" units="%" />
      </td>
    </tr>
    );
}

  componentWillMount() {
    this.props.getLocationWeather();
    this.renderWeather = this.renderWeather.bind(this);

  }

  	render(){
        if(_.isEmpty(this.props.location)) {
          return (
            <div>Loading...</div>
          )};


  		return(
  			<table className="table table-hover">
  				<thead>
  					<tr>
  						<th>City</th>
  						<th>Temperature (°C)</th>
  						<th>Pressure (kPa)</th>
    					<th>Humidity (%)</th>
  					</tr>
  				</thead>
  				<tbody>
            { this.renderWeather(this.props.location.data) }
  				</tbody>
  			</table>
  		);
  	}



}

const mapStateToProps = (state) => {

  return {location: state.location};
};

export default connect(mapStateToProps, {getLocationWeather})(GetBrowserGeoLocation);
