/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import RouteSetup from '../layout/routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, reduxDevtools)}>
    <RouteSetup />
  </Provider>
  , document.querySelector('.container'),
);
