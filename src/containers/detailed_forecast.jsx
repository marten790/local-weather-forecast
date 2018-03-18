import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import { getDetailedWeather } from '../reducers/ui/actions';
import DayWeather from '../components/display-weather-day/day_weather';


class GetDaysWeather extends Component {
  constructor(props) {
    super(props);
    this.state = { days: '', setDefault: false };
  }


  render() {
    if (this.props.days.error) {
      notify.show(this.props.days.payload.message, 'error', 7000);
    }

    if (!this.props.days.data) {
      console.log('this', this);
      return (
        <div>Loading...</div>
      );
    }
    const weatherData = this.props.days.data.list;
    return (
      <div>
        <Link className="btn btn-primary" to="/gifsearch" />
        <DayWeather weatherData={weatherData} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  days: state.days,
});

GetDaysWeather.propTypes = {
  days: PropTypes.object,
};
GetDaysWeather.defaultProps = {
  days: 4,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetailedWeather }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GetDaysWeather);
