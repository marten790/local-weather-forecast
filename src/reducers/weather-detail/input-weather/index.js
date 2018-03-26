import { GET_DAYS_AMOUNT_FAILED, GET_DAYS_AMOUNT_REQUESTED, GET_DAYS_AMOUNT_SUCCEEDED } from './actions';

const INIT_STATE = {
  days: '',
  status: 'REQUESTED',
};

export default function (state = INIT_STATE, action = {}) {
  switch (action.type) {
    case GET_DAYS_AMOUNT_FAILED:
      return { ...state, status: 'FAILED' };
    case GET_DAYS_AMOUNT_REQUESTED:
      return INIT_STATE;
    case GET_DAYS_AMOUNT_SUCCEEDED:
      return { ...state, status: 'SUCCEEDED', days: action.payload.data };
    default:
      return state;
  }
}
