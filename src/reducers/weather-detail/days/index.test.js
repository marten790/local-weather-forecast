import reducer, { INIT_STATE } from './index';
import {
  getWeatherFailed,
  getWeatherRequested,
  getWeatherSucceeded,
} from './actions';


test('testing default state', () => {
  const expected = INIT_STATE;
  const actual = reducer();
  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / days / reducers / REQUESTED', () => {
  const payload = { value: 'value' };
  const action = getWeatherRequested(payload);
  const expected = { status: 'REQUESTED' };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / days / reducers / FAILED', () => {
  const payload = { value: 'value' };
  const action = getWeatherFailed(payload);
  const expected = { status: 'FAILED' };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / days / reducers / SUCCEEDED', () => {
  const payload = { value: 'value' };
  const action = getWeatherSucceeded(payload);
  const expected = { weatherPayload: action.payload, status: 'SUCCEEDED' };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});
