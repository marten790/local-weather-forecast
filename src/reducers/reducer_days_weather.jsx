import { FETCH_DAYS_WEATHER } from './ui/actions';


export default function (state = {}, action) {
  if (action.error) {
    return action;
  }
  // console.log('action.payload in reducer', action.payload);
  switch (action.type) {
    case FETCH_DAYS_WEATHER:
      return action.payload;

    default:
      return state;
  }
}
