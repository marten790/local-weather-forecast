import axios from 'axios';

const API_KEY = '767d4989a105ba9e4d65278e6b15488f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER_INPUT = 'FETCH_WEATHER_INPUT';
export const FETCH_GEO_WEATHER = 'FETCH_GEO_WEATHER';

export function fetchWeatherInput(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return{
		type: FETCH_WEATHER_INPUT,
		payload: request
	};
}

export function getLocationWeather(){
  const geolocation = navigator.geolocation;

  const location = new Promise(function (resolve, reject) {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }

    geolocation.getCurrentPosition(function (position) {
      const latitude  = position.coords.latitude;
    	const longitude = position.coords.longitude;
      const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}`;
      const request = axios.get(url);

      resolve(request);
    }, function () {
      reject(new Error('Permission denied'));
    });
  });

  return {
		 	type: FETCH_GEO_WEATHER,
	 	 	payload: location
  };
};
