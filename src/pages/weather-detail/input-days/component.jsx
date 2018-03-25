import React, { Component } from 'react';
import { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';
import './index.scss';


class GetDays extends Component {
  constructor(props) {
    super(props);
    this.state = { days: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({ days: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getDetailedWeather(this.state.days);
    this.setState({ days: '' });
  }

  render() {
    if (this.props.data) {
      notify.show(this.props.location.payload.message, 'error', 7000);
    }

    return (
      <div>
        <h2>Geo Weather</h2>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            type="number"
            placeholder="Please enter the amount of days you would like to view"
            className="form-control"
            value={this.state.days}
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

GetDays.propTypes = {
  data: PropTypes.shape(),
  location: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  payload: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  getDetailedWeather: PropTypes.func,
};

GetDays.defaultProps = {
  data: undefined,
  location: [],
  payload: [],
  getDetailedWeather: [],
};

// days: PropTypes.arrayOf(PropTypes.string)
// days: PropTypes.shape({
//   name:PropTypes.string,
//   name:PropTypes.string,
// })
export default GetDays;
