import {
  FETCH_MAP_LOCATION_FAILED,
  FETCH_MAP_LOCATION_REQUESTED,
  FETCH_MAP_LOCATION_SUCCEEDED,
  fetchMapLocationFailed,
  fetchMapLocationRequested,
  fetchMapLocationSucceeded,
} from './actions';

test('reducers / weather-detail / map / actions / FETCH_MAP_LOCATION_FAILED', () => {
  const expected = { type: FETCH_MAP_LOCATION_FAILED };
  expect(fetchMapLocationFailed()).toEqual(expected);
});

test('reducers / weather-detail / map / actions / FETCH_MAP_LOCATION_REQUESTED', () => {
  const expected = { type: FETCH_MAP_LOCATION_REQUESTED };
  expect(fetchMapLocationRequested()).toEqual(expected);
});

test('reducers / weather-detail / map / actions / FETCH_MAP_LOCATION_SUCCEEDED', () => {
  const expected = { type: FETCH_MAP_LOCATION_SUCCEEDED };
  expect(fetchMapLocationSucceeded()).toEqual(expected);
});
