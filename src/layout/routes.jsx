import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GifSearch from '../layout/gif_search';
import WeatherDetail from '../layout/weather_forecast';


const RouteSetup = ({ state }) => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Get your weather forecast</Link>
        </li>
        <li>
          <Link to="/GifSearch">Search for a Gif</Link>
        </li>
      </ul>

      <hr />

      <Route path="/GifSearch" component={GifSearch} />
      <Route exact path="/" component={WeatherDetail} />
    </div>
  </Router>
);

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(RouteSetup);
