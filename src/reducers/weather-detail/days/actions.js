export const GET_WEATHER_FAILED = 'GET_WEATHER_FAILED';
export const GET_WEATHER_REQUESTED = 'GET_WEATHER_REQUESTED';
export const GET_WEATHER_SUCCEEDED = 'GET_WEATHER_SUCCEEDED';

export const getWeatherFailed = () => ({ type: GET_WEATHER_FAILED });
export const getWeatherRequested = () => ({ type: GET_WEATHER_REQUESTED });
export const getWeatherSucceeded = payload => ({ payload, type: GET_WEATHER_SUCCEEDED });
