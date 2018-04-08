// import reducer, { INIT_STATE } from './index';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import getDetailedWeather from '../../../api/get-weather';
import {
  GET_WEATHER_FAILED,
  GET_WEATHER_REQUESTED,
  GET_WEATHER_SUCCEEDED,
  getWeatherFailed,
  getWeatherRequested,
  getWeatherSucceeded,
} from './actions';

const API_KEY_WEATHER = '767d4989a105ba9e4d65278e6b15488f';
const ROOT_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/forecast/';
const latitude = '-33.9354215';
const longitude = '18.4654179';
const numberOfDays = 4;
// const position = { latitude: '-33.9354215', longitude: '18.4654179' };

const url = `${ROOT_URL_WEATHER}daily?appid=${API_KEY_WEATHER}&lat=${latitude}&lon=${longitude}&cnt=${numberOfDays}&units=metric`;


const mockStore = configureStore(thunk);

function fetchData() {
  return dispatch => fetch(url) // Some async action with promise
    .then(() => dispatch(getWeatherSucceeded()));
}

it('should execute fetch data', () => {
  const store = mockStore({});

  // Return the promise
  return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(getWeatherSucceeded());
    });
});


// import * as actions from '../../actions/TodoActions';
// import * as types from '../../constants/ActionTypes';
// import expect from 'expect'; // You can use any testing library


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
//
// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });
//
//   it('creates GET_WEATHER_SUCCEEDED when it has completed fetching the weather from the api', () => {
//     fetchMock
//       .getOnce(url, { payload: { data: {} }, type: 'GET_WEATHER_SUCCEEDED' });
//
//     const expectedActions = [
//       GET_WEATHER_REQUESTED,
//       GET_WEATHER_SUCCEEDED,
//       { payload: { data: {} }, type: 'GET_WEATHER_SUCCEEDED' },
//     ];
//     const store = mockStore({ data: {} });
//
//     return store.dispatch(getWeatherSucceeded()).then((data) => {
//       console.log('data', data);
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
//
//   // it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//   //   fetchMock
//   //     .getOnce('/todos', { body: { todos: ['do something'] },
//   //      headers: { 'content-type': 'application/json' } });
//   //
//   //
//   //   const expectedActions = [
//   //     { type: types.FETCH_TODOS_REQUEST },
//   //     { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } },
//   //   ];
//   //   const store = mockStore({ todos: [] });
//   //
//   //   return store.dispatch(actions.fetchTodos()).then(() => {
//   //     // return of async actions
//   //     expect(store.getActions()).toEqual(expectedActions);
//   //   });
//   // });
// });
