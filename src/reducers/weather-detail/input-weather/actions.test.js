import {
  GET_DAYS_AMOUNT_FAILED,
  GET_DAYS_AMOUNT_REQUESTED,
  GET_DAYS_AMOUNT_SUCCEEDED,
  getDaysAmountFailed,
  getDaysAmountRequested,
  getDaysAmountSucceeded,
} from './actions';

test('reducers / weather-detail / input-weather / actions / GET_DAYS_AMOUNT_FAILED', () => {
  const expected = { type: GET_DAYS_AMOUNT_FAILED };
  expect(getDaysAmountFailed()).toEqual(expected);
});

test('reducers / weather-detail / input-weather / actions / GET_DAYS_AMOUNT_REQUESTED', () => {
  const expected = { type: GET_DAYS_AMOUNT_REQUESTED };
  expect(getDaysAmountRequested()).toEqual(expected);
});

test('reducers / weather-detail / input-weather / actions / GET_DAYS_AMOUNT_SUCCEEDED', () => {
  const payload = { key: 'value' };
  const expected = { payload, type: GET_DAYS_AMOUNT_SUCCEEDED };
  expect(getDaysAmountSucceeded(payload)).toEqual(expected);
});
