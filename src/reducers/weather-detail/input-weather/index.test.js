import reducer, { INIT_STATE } from './index';
import {
  getDaysAmountFailed,
  getDaysAmountRequested,
  getDaysAmountSucceeded,
} from './actions';


test('testing default state', () => {
  const expected = INIT_STATE;
  const actual = reducer();
  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / input-weather / reducers / REQUESTED', () => {
  const payload = { value: 'value' };
  const action = getDaysAmountRequested(payload);
  const expected = { status: 'REQUESTED' };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / input-weather / reducers / FAILED', () => {
  const payload = { value: 'value' };
  const action = getDaysAmountFailed(payload);
  const expected = { status: 'FAILED' };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});

test('reducers / weather-detail / input-weather / reducers / SUCCEEDED', () => {
  const payload = { value: 'value' };
  const action = getDaysAmountSucceeded(payload);
  const expected = { status: 'SUCCEEDED', noOfDays: action.payload.data };
  const actual = reducer({}, action);

  expect(actual).toEqual(expected);
});
