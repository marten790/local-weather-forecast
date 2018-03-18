import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from '../reducers/ui/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router';

import GifSearch from '../layout/gif_search';
import WeatherDetail from '../layout/weather_forecast';

// export default () => (
// <Switch>
//   <Route component={Installation} path={installation()} />
//   <Route component={Components} path={components()} />
// </Switch>
// );


const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

{ /* <Route component={GifSearch} path="/gifsearch" /> */ }
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Router>
        <Switch>
          <Route path="/gifsearch" component={WeatherDetail} />
          <Route path="/" component={WeatherDetail} />
        </Switch>
      </Router>
    </div>
  </Provider>
  , document.querySelector('.container'),
);
