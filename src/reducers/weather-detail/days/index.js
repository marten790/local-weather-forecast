import { GET_WEATHER_FAILED, GET_WEATHER_REQUESTED, GET_WEATHER_SUCCEEDED } from './actions';

const INIT_STATE = {
  status: 'REQUESTED',
  payload: undefined,
};

export default (state = INIT_STATE, action = {}) => {
  console.log('action', action);
  switch (action.type) {
    case GET_WEATHER_FAILED:
      return { status: 'FAILED' };
    case GET_WEATHER_REQUESTED:
      return INIT_STATE;
    case GET_WEATHER_SUCCEEDED:
      return { ...state, weatherPayload: action.payload, status: 'SUCCEEDED' };
    default:
      return state;
  }
};
