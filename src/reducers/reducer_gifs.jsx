import { FETCH_GIF_LIST } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_GIF_LIST:
      return action.payload.data;

    default:
      return state;
  }
}
