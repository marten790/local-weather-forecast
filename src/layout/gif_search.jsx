import React from 'react';
import Notifications from 'react-notify-toast';
import GetBrowserGeoLocation from '../containers/geo_located';
import GifInput from '../containers/gif_input';
import DisplayGifList from '../containers/display_gif_list';

const GifSearch = () => (
  <div>
    <Notifications />
    <GifInput />
    <DisplayGifList />
  </div>
);

export default GifSearch;
