import { FETCH_DAYS_WEATHER } from '../../ui/actions';


export default function (state = {}, action) {
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
//   weather: state.leftNavigationActive,
// }
