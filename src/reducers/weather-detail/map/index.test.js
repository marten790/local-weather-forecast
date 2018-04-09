import reducer, { INIT_STATE } from './index';
import {
  fetchMapLocationFailed,
  fetchMapLocationRequested,
  fetchMapLocationSucceeded,
} from './actions';


test('testing default state', () => {
  const expected = INIT_STATE;
  const actual = reducer();
  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / map / reducers / REQUESTED', () => {
  const payload = { value: 'value' };
  const action = fetchMapLocationRequested(payload);
  const expected = { status: 'REQUESTED', geoLocation: {} };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / map / reducers / FAILED', () => {
  const payload = { value: 'value' };
  const action = fetchMapLocationFailed(payload);
  const expected = { status: 'FAILED' };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / map / reducers / SUCCEEDED', () => {
  const payload = { value: 'value' };
  const action = fetchMapLocationSucceeded(payload);
  const expected = { geoLocation: action.payload, status: 'SUCCEEDED' };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});
