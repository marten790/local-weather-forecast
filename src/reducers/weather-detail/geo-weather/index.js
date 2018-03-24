import { FETCH_GEO_WEATHER } from '../../ui/actions';

const INIT_STATE = [];

export default function (state = INIT_STATE, action) {
  console.log('state FETCH_GEO_WEATHER', state);
  // console.log('action FETCH_GEO_WEATHER', action);
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
// [
//   ...state,
//   location: action.payload,
// ];
