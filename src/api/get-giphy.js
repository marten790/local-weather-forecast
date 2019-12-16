import axios from 'axios';

const API_KEY_GIFS = 'WGWuC3vS6zm41bESU9YcvBiKKp57KZ1l';
const ROOL_URL_GIFS = 'https://api.giphy.com/v1/gifs/';
export const FETCH_GIF_LIST = 'FETCH_GIF_LIST';

export function fetchGifList(tag) {
  const url = `${ROOL_URL_GIFS}search?api_key=${API_KEY_GIFS}&q=${tag}&limit=15&offset=0&rating=R&lang=en`;
  const request = axios.get(url);

  return {
    type: FETCH_GIF_LIST,
    payload: request,
  };
}
