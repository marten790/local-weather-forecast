import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayGifList extends Component {
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
        <div>Please enter a gif title above....</div>
      );
    }

    return (
      <div>
        { this.props.gifs.data.map(this.renderGifs) }
      </div>
    );
  }
}

DisplayGifList.propTypes = {
  gifs: PropTypes.object, // eslint-disable-line react/forbid-prop-types,
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types,
  map: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
};

DisplayGifList.defaultProps = {
  gifs: {},
  data: {},
  map: [],
};


export default DisplayGifList;
