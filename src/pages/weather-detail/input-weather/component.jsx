import React from 'react';
import './index.scss';

const GetDays = refs => (
  <div>
    {console.log('INSIDE ', refs)}
    <h2>Geo Weather</h2>
    <form onSubmit={refs.onFormSubmit} className="input-group">
      <input
        type="number"
        placeholder="Please enter the amount of days you would like to view"
        className="form-control"
        value={refs.days}
        onChange={refs.onInputChange}
      />

      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Sumbit</button>
      </span>
    </form>
  </div>
);

export default GetDays;
