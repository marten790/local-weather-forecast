import { GET_DAYS_AMOUNT_FAILED, GET_DAYS_AMOUNT_REQUESTED, GET_DAYS_AMOUNT_SUCCEEDED } from './actions';

export const INIT_STATE = {
  status: 'REQUESTED',
  noOfDays: undefined,
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case GET_DAYS_AMOUNT_FAILED:
      return { ...state, status: 'FAILED' };
    case GET_DAYS_AMOUNT_REQUESTED:
      return INIT_STATE;
    case GET_DAYS_AMOUNT_SUCCEEDED:
      return { ...state, status: 'SUCCEEDED', noOfDays: action.payload.data };
    default:
      return state;
  }
};
