import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import { getDetailedWeather } from '../actions/index';


class GetDaysWeather extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { days: '', setDefault: false };
  // }

  renderDays(dayWeatherData) {
    return (
      <div key={dayWeatherData.dt}>
        <div>17 Feb</div>
        <div>{dayWeatherData.temp.day} | {dayWeatherData.temp.min} {dayWeatherData.temp.max}</div>
        <div>Image</div>
        <div>Heavy Cloud</div>
      </div>
    );
  }

  render() {
    if (this.props.days.error) {
      notify.show(this.props.days.payload.message, 'error', 7000);
    }

    if (!this.props.days.data) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        { this.props.days.data.list.map(this.renderDays) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  days: state.days,
  setDefault: state.setDefault,
});

GetDaysWeather.propTypes = {
  days: PropTypes.object, // eslint-disable-line react/forbid-prop-types,
};
GetDaysWeather.defaultProps = {
  days: 4,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetailedWeather }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GetDaysWeather);
