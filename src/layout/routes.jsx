import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import WeatherDetail from './index';


const RouteSetup = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Get your weather forecast</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={WeatherDetail} />
    </div>
  </Router>
);

export default connect()(RouteSetup);
