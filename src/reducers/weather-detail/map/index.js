import { FETCH_MAP_LOCATION_FAILED, FETCH_MAP_LOCATION_REQUESTED, FETCH_MAP_LOCATION_SUCCEEDED } from './actions';

export const INIT_STATE = {
  status: 'REQUESTED',
  geoLocation: {},
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_MAP_LOCATION_FAILED:
      return { status: 'FAILED' };
    case FETCH_MAP_LOCATION_REQUESTED:
      return INIT_STATE;
    case FETCH_MAP_LOCATION_SUCCEEDED:
      return { ...state, geoLocation: action.payload, status: 'SUCCEEDED' };

    default:
      return state;
  }
};
