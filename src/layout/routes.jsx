import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GifSearch from '../layout/gif_search';
import WeatherDetail from '../layout/weather_forecast';

const RouteSetup = () => (
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

      <Route exact path="/" component={WeatherDetail} />
      <Route path="/GifSearch" component={GifSearch} />
    </div>
  </Router>
);

export default RouteSetup;
