import { connect } from 'react-redux';

import { actionsAvailableForComponent } from 'reducers/ui/actions';

import Component from './component';

const mapStateToProps = (state, { location: { pathname } }) => ({
  currentUrl: pathname,
});

const mapDispatchToProps = dispatch => ({
 actionsAvailableForComponent: element =>
    dispatch actionsAvailableForComponent(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
