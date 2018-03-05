import { FETCH_GEO_WEATHER } from '../actions/index';

export default function (state = [], action) {
  if (action.error) {
    return action;
  }

  switch (action.type) {
    case FETCH_GEO_WEATHER:
      return [action.payload, ...state];

    default:
      return state;
  }
}
