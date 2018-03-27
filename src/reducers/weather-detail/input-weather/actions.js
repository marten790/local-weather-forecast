export const GET_DAYS_AMOUNT_FAILED = 'GET_DAYS_AMOUNT_FAILED';
export const GET_DAYS_AMOUNT_REQUESTED = 'GET_DAYS_AMOUNT_REQUESTED';
export const GET_DAYS_AMOUNT_SUCCEEDED = 'GET_DAYS_AMOUNT_SUCCEEDED';

export const getDaysAmountFailed = () => ({ type: GET_DAYS_AMOUNT_FAILED });
export const getDaysAmountRequested = () => ({ type: GET_DAYS_AMOUNT_REQUESTED });
export const getDaysAmountSucceeded = payload => ({ payload, type: GET_DAYS_AMOUNT_SUCCEEDED });
