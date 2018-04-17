import axios from 'axios';

const API_KEY_WEATHER = '767d4989a105ba9e4d65278e6b15488f';
const ROOT_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/forecast/';

export default (daysCount, position) => {
  const { latitude, longitude } = position;

  let numberOfDays = daysCount;

  if (!daysCount || (daysCount < 1) || (daysCount >= 16)) {
    numberOfDays = 4;
  }
  const url = `${ROOT_URL_WEATHER}daily?appid=${API_KEY_WEATHER}&lat=${latitude}&lon=${longitude}&cnt=${numberOfDays}&units=metric`;
  const request = axios.get(url);

  return request;
};
