import axios from 'axios';

const API_KEY_WEATHER = '767d4989a105ba9e4d65278e6b15488f';
const ROOT_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/forecast/';

export default (daysCount) => {
  const { geolocation } = navigator;

  return new Promise((resolve, reject) => {
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

      request.then(data => resolve(data)).catch(() => reject(new Error('error')));
    }, () => {
      reject(new Error('Permission denied, This application requires the use of location services, please enable them on your device to use this application'));
    });
  });
};
