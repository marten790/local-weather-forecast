import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';


class GetDays extends Component {
  constructor(props) {
    super(props);
    this.state = { days: undefined };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({ days: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getDetailedWeather(this.state.days);
    this.setState({ days: undefined });
  }

  render() {
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
  days: PropTypes.number,
  getDetailedWeather: PropTypes.func,
};

GetDays.defaultProps = {
  days: undefined,
  getDetailedWeather: [],
};

// days: PropTypes.arrayOf(PropTypes.string)
// days: PropTypes.shape({
//   name:PropTypes.string,
//   name:PropTypes.string,
// })
export default GetDays;
