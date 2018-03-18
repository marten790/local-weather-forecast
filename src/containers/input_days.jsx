import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getDetailedWeather } from '../reducers/ui/actions';

class GetDays extends Component {
  constructor(props) {
    super(props);

    this.state = { days: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getDetailedWeather({ days: 4);
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
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
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

const mapStateToProps = state => ({
  days: state.days,
});

GetDays.propTypes = {
  data: PropTypes.shape(),
  days: PropTypes.number,
  location: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  payload: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  getDetailedWeather: PropTypes.func,
};

GetDays.defaultProps = {
  data: undefined,
  days: 4,
  location: [],
  payload: [],
  getDetailedWeather: [],
};
// days: PropTypes.arrayOf(PropTypes.string)
// days: PropTypes.shape({
//   name:PropTypes.string,
//   name:PropTypes.string,
// })
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetailedWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(GetDays);
