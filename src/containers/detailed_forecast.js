import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import _ from 'lodash';
import Notifications, {notify} from 'react-notify-toast';
import { getDetailedWeather } from '../actions/index';
import { fetchGifList } from '../actions/index';


class GetDaysWeather extends Component {

  constructor(props){

		super(props);
		this.state = { days: '', setDefault: false };
	}

  renderDays(dayWeatherData){
        return (
      <div key={dayWeatherData.dt}>
        <div>17 Feb</div>
        <div>{dayWeatherData.temp.day} | {dayWeatherData.temp.min} {dayWeatherData.temp.max}</div>
        <div>Image</div>
        <div>Heavy Cloud</div>
      </div>
    );
  }

	render(){

    if(this.props.days.error){
      notify.show(this.props.days.payload.message, 'error', 7000);
    }

    if(!this.props.days.data) {
      return (
        <div>Loading...</div>
      )};

		return(
        <div>
          { this.props.days.data.list.map(this.renderDays) }
        </div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    days: state.days,
    setDefault: state.setDefault,
    gifs: state.gifs
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getDetailedWeather, fetchGifList }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GetDaysWeather);
