import axios from 'axios';

const API_KEY_WEATHER = '767d4989a105ba9e4d65278e6b15488f';
const ROOT_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/forecast/';

const API_KEY_GIFS = 'WGWuC3vS6zm41bESU9YcvBiKKp57KZ1l';
const ROOL_URL_GIFS = 'https://api.giphy.com/v1/gifs/';

export const FETCH_GIF_LIST = 'FETCH_GIF_LIST';
export const FETCH_WEATHER_INPUT = 'FETCH_WEATHER_INPUT';
export const FETCH_GEO_WEATHER = 'FETCH_GEO_WEATHER';
export const FETCH_DAYS_WEATHER = 'FETCH_DAYS_WEATHER';

export function fetchWeatherInput(city) {
  const url = `${ROOT_URL_WEATHER}&q=${city},za&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER_INPUT,
    payload: request,
  };
}

export function fetchGifList(tag) {
  const url = `${ROOL_URL_GIFS}search?api_key=${API_KEY_GIFS}&q=${tag}&limit=15&offset=0&rating=R&lang=en`;
  const request = axios.get(url);

  return {
    type: FETCH_GIF_LIST,
    payload: request,
  };
}

export function getDetailedWeather(daysCount) {
  const { geolocation } = navigator;

  const days = new Promise(((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Geolocation not supported'));
    }

    geolocation.getCurrentPosition((position) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      let numberOfDays = Number(daysCount);
      if (!daysCount || (daysCount < 1)) {
        numberOfDays = 4;
      }

      const url = `${ROOT_URL_WEATHER}daily?appid=${API_KEY_WEATHER}&lat=${latitude}&lon=${longitude}&cnt=${numberOfDays}&units=metric`;
      const request = axios.get(url);

      resolve(request);
    }, () => {
      reject(new Error('Permission denied, This application requires the use of location services, please enable them on your device to use this application'));
    });
  }));
  return {
    type: FETCH_DAYS_WEATHER,
    payload: days,
  };
}


export function getLocationMap() {
  const { geolocation } = navigator;
  const location = new Promise(((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Geolocation not supported'));
    }
    geolocation.getCurrentPosition((position) => {
      resolve(position.coords);
    }, () => {
      reject(new Error('Permission denied, This application requires the use of location services, please enable them on your device to use this application'));
    });
  }));
  return {
    type: FETCH_GEO_WEATHER,
    payload: location,
  };
}
