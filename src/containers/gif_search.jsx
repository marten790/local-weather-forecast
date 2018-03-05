import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { fetchGifList } from '../actions/index';

class GifSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchGifList(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <h2>Gif Search</h2>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five day forecast in your favoright cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />

          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Sumbit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGifList }, dispatch);
}

GifSearch.propTypes = {
  fetchGifList: PropTypes.func,
};
GifSearch.defaultProps = {
  fetchGifList: [], // eslint-disable-line react/forbid-prop-types,
};

export default connect(null, mapDispatchToProps)(GifSearch);
