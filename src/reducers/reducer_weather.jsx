import { FETCH_WEATHER_INPUT } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER_INPUT:
      return action.payload.data;

    default:
      return state;
  }
}
