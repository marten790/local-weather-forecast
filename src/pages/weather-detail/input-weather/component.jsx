import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const GetDays = ({ onInputChange, onFormSubmit, days }) => (
  <React.Fragment>
    <h2>Geo Weather</h2>
    <form data-qa="submit-action" onSubmit={onFormSubmit} className="input-group">
      <input
        name="input-days"
        data-qa="input-days-submit"
        type="number"
        placeholder="Please enter the amount of days you would like to view"
        className="form-control"
        value={days}
        onChange={onInputChange}
        min="1"
        max="16"
        step="1"
      />

      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Sumbit</button>
      </span>
    </form>
  </React.Fragment>
);
GetDays.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  days: PropTypes.string,
};
GetDays.defaultProps = {
  days: undefined,
};
export default GetDays;
