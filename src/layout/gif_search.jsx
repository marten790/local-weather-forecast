import React from 'react';
import Notifications from 'react-notify-toast';
import GifInput from '../pages/gif-search/gif-input';
import DisplayGifList from '../pages/gif-search';

const GifSearch = () => (
  <div>
    <Notifications />
    <GifInput />
    <DisplayGifList />
  </div>
);

export default GifSearch;
