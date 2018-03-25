import { FETCH_DAYS_WEATHER } from '../../ui/actions';

const INIT_STATE = {};

export default function (state = INIT_STATE, action) {
  // console.log('state FETCH_DAYS_WEATHER', state);
  // console.log('action FETCH_DAYS_WEATHER', action);
  if (action.error) {
    return action;
  }
  switch (action.type) {
    case FETCH_DAYS_WEATHER:
      return action.payload;

    default:
      return state;
  }
}
// {
//   ...state,
//   days: action.payload,
// }
