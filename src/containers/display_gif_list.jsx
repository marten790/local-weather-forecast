import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchGifList } from '../actions/index';

class DisplayGifList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { gifs: {} };
  // }

  renderGifs(gifData) {
    return (
      <span key={gifData.images.fixed_height_small.url}>
        <img alt="Weather Condition" key={gifData.id} src={gifData.images.fixed_height_small.url} />
      </span>
    );
  }

  render() {
    if (!this.props.gifs.data) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        { this.props.gifs.data.map(this.renderGifs) }
      </div>
    );
  }
}

const mapStateToProps = state => ({ gifs: state.gifs });

DisplayGifList.propTypes = {
  gifs: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types,
  map: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
};

DisplayGifList.defaultProps = {
  gifs: [],
  data: {},
  map: [],
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGifList }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayGifList);
