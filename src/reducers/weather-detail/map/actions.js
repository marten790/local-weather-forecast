export const FETCH_MAP_LOCATION_FAILED = 'FETCH_MAP_LOCATION_FAILED';
export const FETCH_MAP_LOCATION_REQUESTED = 'FETCH_MAP_LOCATION_REQUESTED';
export const FETCH_MAP_LOCATION_SUCCEEDED = 'FETCH_MAP_LOCATION_SUCCEEDED';

export const fetchMapLocationFailed = () => ({ type: FETCH_MAP_LOCATION_FAILED });
export const fetchMapLocationRequested = () => ({ type: FETCH_MAP_LOCATION_REQUESTED });
export const fetchMapLocationSucceeded = payload => ({ payload, type: FETCH_MAP_LOCATION_SUCCEEDED });
