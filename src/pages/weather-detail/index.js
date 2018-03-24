import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetailedWeather } from '../../reducers/ui/actions';
import GetDaysWeather from './component';

const mapStateToProps = state => ({
  days: state.days,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetailedWeather }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GetDaysWeather);
