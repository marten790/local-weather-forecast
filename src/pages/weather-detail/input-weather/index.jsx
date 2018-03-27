import { connect } from 'react-redux';
import { getDaysAmountFailed, getDaysAmountRequested, getDaysAmountSucceeded } from '../../../reducers/weather-detail/input-weather';
import { getDetailedWeather } from '../../../api/get-weather';
import GetDays from './component';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return {
    getDetailedWeather: (days) => {
      dispatch(getDaysAmountRequested());
      getDetailedWeather(days)
        .then(data => dispatch(getDaysAmountSucceeded(data)))
        .catch(() => dispatch(getDaysAmountFailed()));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetDays);
