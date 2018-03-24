import { FETCH_WEATHER_INPUT } from '../../ui/actions';

const INIT_STATE = [];

export default function (state = INIT_STATE, action) {
  console.log('state FETCH_WEATHER_INPUT', state);
  console.log('action FETCH_WEATHER_INPUT', action);
  switch (action.type) {
    case FETCH_WEATHER_INPUT:
      return action.payload.data;

    default:
      return state;
  }
}
// {
//   ...state,
//   days: action.payload.data,
// }
