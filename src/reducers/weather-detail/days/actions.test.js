import {
  GET_WEATHER_FAILED,
  GET_WEATHER_REQUESTED,
  GET_WEATHER_SUCCEEDED,
  getWeatherFailed,
  getWeatherRequested,
  getWeatherSucceeded,
} from './actions';

test('reducers / weather-detail / days / actions / GET_WEATHER_FAILED', () => {
  const expected = { type: GET_WEATHER_FAILED };
  expect(getWeatherFailed()).toEqual(expected);
});

test('reducers / weather-detail / days / actions / GET_WEATHER_REQUESTED', () => {
  const expected = { type: GET_WEATHER_REQUESTED };
  expect(getWeatherRequested()).toEqual(expected);
});

test('reducers / weather-detail / days / actions / GET_WEATHER_SUCCEEDED', () => {
  const expected = { type: GET_WEATHER_SUCCEEDED };
  expect(getWeatherSucceeded()).toEqual(expected);
});
