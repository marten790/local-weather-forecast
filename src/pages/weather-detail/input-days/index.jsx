import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetailedWeather } from '../../../reducers/ui/actions';
import GetDays from './component';


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetailedWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(GetDays);
