import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGifList } from '../../reducers/ui/actions';

import DisplayGifList from './component';


const mapStateToProps = state => ({ gifs: state.gifs });


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGifList }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayGifList);
