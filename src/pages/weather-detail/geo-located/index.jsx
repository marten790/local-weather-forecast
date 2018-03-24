import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLocationMap } from '../../../reducers/ui/actions';
import GetBrowserGeoLocation from './component';

const mapStateToProps = ({ location }) => ({ location });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLocationMap }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GetBrowserGeoLocation);
